import StreamPlayer from "@/components/stream/StreamPlayer";
import { getUserByUsername } from "@/lib/userService";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

interface PageProps {
  params: {
    username: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const extenralUser = await currentUser();
  const user = await getUserByUsername(params.username);

  if (!user || user.externalUserId !== extenralUser?.id || !user.stream) {
    return <div>User not found</div>;
  }

  return (
    <div className="h-full">
      <StreamPlayer user={user} stream={user.stream} isFollowing />
    </div>
  );
};

export default Page;
