"use server";

import { v4 } from "uuid";
import { AccessToken } from "livekit-server-sdk";

import { getUserById } from "@/lib/userService";
import { getSelf } from "@/lib/authService";
import { isBlockedByUser } from "@/lib/block";

export const createViewerToken = async (hostIdentity: string) => {
  let self;
  try {
    self = await getSelf();
  } catch (error) {
    const id = v4();
    const username = `guest#${Math.floor(Math.random() * 10000)}`;
    self = { id, username };
  }

  const host = await getUserById(hostIdentity);
  if (!host) {
    throw new Error("User Not Found");
  }

  const isBlocked = await isBlockedByUser(host.id);
  if (isBlocked) {
    throw new Error("User Is Blocked");
  }

  const isHost = self.id === host.id;

  const token = new AccessToken(
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_API_SECRET!,
    {
      identity: isHost ? `host-${self.id}` : self.id,
      name: self.username,
    }
  );

  token.addGrant({
    room: host.id,
    roomJoin: true,
    canPublish: false,
    canPublishData: true,
  });

  return await Promise.resolve(token.toJwt());
};
