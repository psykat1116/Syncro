import Action from "@/components/user/Action";
import { isFollowingUser } from "@/lib/follow";
import { getUserByUsername } from "@/lib/getbyusername";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: {
    username: string;
  };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    return notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div>
      <Action isFollowing={isFollowing} userId={user.id} />
    </div>
  );
};

export default Page;
