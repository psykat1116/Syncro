import { db } from "./db";

export const getUserByUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: { username },
    include: {
      stream: {
        select: {
          name: true,
          thumbnailUrl: true,
          isChatEnabled: true,
          isChatDelayed: true,
          isChatFollowersOnly: true,
        },
      },
      _count: {
        select: {
          followedBy: true,
        },
      },
    },
  });
  return user;
};

export const getUserById = async (id: string) => {
  const user = await db.user.findUnique({
    where: { id },
    select: {
      id: true,
    },
  });
  return user;
};
