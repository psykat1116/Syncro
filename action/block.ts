"use server";
import { getSelf } from "@/lib/authService";
import { blockUser, unblockUser } from "@/lib/block";
import { RoomServiceClient } from "livekit-server-sdk";
import { revalidatePath } from "next/cache";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

export const onBlock = async (id: string) => {
  try {
    const self = await getSelf();
    let blockedUser;

    try {
      blockedUser = await blockUser(id);
    } catch (error) {
      // The user is a guest
    }

    try {
      await roomService.removeParticipant(self.id, id);
    } catch (error) {
      // This means user is not in the room
    }
    
    revalidatePath(`/u/${self.username}/community`);
    return blockedUser;
  } catch (error) {
    throw new Error("Internal server error");
  }
};

export const onUnBlock = async (id: string) => {
  try {
    const unblockedUser = await unblockUser(id);
    revalidatePath("/");
    if (unblockedUser) {
      revalidatePath(`/${unblockedUser.blocked.username}`);
    }
    return unblockedUser;
  } catch (error) {
    throw new Error("Internal server error");
  }
};
