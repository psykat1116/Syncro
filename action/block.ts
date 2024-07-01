"use server";
import { blockUser, unblockUser } from "@/lib/block";
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
  try {
    // TODO: Adapt to disconnect from livesream
    // TODO: Adapt ability to kick the guest from the livesream
    const blockedUser = await blockUser(id);
    revalidatePath("/");
    if (blockedUser) {
      revalidatePath(`/${blockedUser.blocked.username}`);
    }
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
