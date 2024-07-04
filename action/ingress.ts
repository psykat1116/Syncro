"use server";
import {
  IngressAudioEncodingPreset,
  IngressInput,
  IngressClient,
  IngressVideoEncodingPreset,
  RoomServiceClient,
  TrackSource,
  CreateIngressOptions,
  IngressVideoOptions,
  IngressAudioOptions,
} from "livekit-server-sdk";

import { db } from "@/lib/db";
import { getSelf } from "@/lib/authService";
import { revalidatePath } from "next/cache";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

const ingressClient = new IngressClient(process.env.LIVEKIT_API_URL!);

export const resetIngress = async (hostIdentity: string) => {
  const ingresses = await ingressClient.listIngress({
    roomName: hostIdentity,
  });

  const rooms = await roomService.listRooms([hostIdentity]);
  for (const room of rooms) {
    await roomService.deleteRoom(room.name);
  }
  for (const ingress of ingresses) {
    if (ingress.ingressId) {
      await ingressClient.deleteIngress(ingress.ingressId);
    }
  }
};

export const createIngress = async (ingressType: IngressInput) => {
  try {
    const self = await getSelf();
    if (!self) {
      throw new Error("User not found");
    }

    // *reset existing ingress*
    await resetIngress(self.id);

    const options: CreateIngressOptions = {
      name: self.username,
      roomName: self.id,
      participantName: self.username,
      participantIdentity: self.id,
    };

    if (ingressType === IngressInput.WHIP_INPUT) {
      options.enableTranscoding = false;
    } else {
      options.video = new IngressVideoOptions({
        source: TrackSource.CAMERA,
        encodingOptions: {
          value: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS,
          case: "preset",
        },
      });
      options.audio = new IngressAudioOptions({
        source: TrackSource.MICROPHONE,
        encodingOptions: {
          value: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS,
          case: "preset",
        },
      });
    }

    const ingress = await ingressClient.createIngress(ingressType, options);
    if (!ingress || !ingress.url || !ingress.streamKey) {
      throw new Error("Failed to create ingress");
    }

    await db.stream.update({
      where: { userId: self.id },
      data: {
        ingressId: ingress.ingressId,
        serverUrl: ingress.url,
        streamKey: ingress.streamKey,
      },
    });

    revalidatePath(`/u/${self.username}/keys`);
    return ingress.toJson();
  } catch (error) {
    console.log("[CREATE_INGRESS_ERROE]", error);
    return null;
  }
};
