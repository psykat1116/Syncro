import React from "react";
import { notFound } from "next/navigation";

import { isBlockedByUser } from "@/lib/block";
import { isFollowingUser } from "@/lib/followService";
import { getUserByUsername } from "@/lib/userService";
import StreamPlayer from "@/components/stream/StreamPlayer";

interface PageProps {
  params: {
    username: string;
  };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const user = await getUserByUsername(params.username);

  if (!user || !user.stream) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) {
    notFound();
  }

  return (
    <StreamPlayer user={user} stream={user.stream} isFollowing={isFollowing} />
  );
};

export default Page;
