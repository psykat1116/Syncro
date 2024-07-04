"use client";
import { Follow, User } from "@prisma/client";

import { useSidebar } from "@/store/useSidebar";
import UserItem, { UserItemSkeleton } from "@/components/sidebar/UserItem";

interface FollowingProps {
  data: (Follow & {
    following: User & { stream: { isLive: boolean } | null };
  })[];
}

const Following = ({ data }: FollowingProps) => {
  const { collapsed } = useSidebar();

  if (!data.length) {
    return null;
  }

  return (
    <div>
      {!collapsed && (
        <div className="pl-3 mb-4">
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
      )}
      <ul className="space-y-2">
        {data.map((follow) => (
          <UserItem
            key={follow.following.id}
            username={follow.following.username}
            imageUrl={follow.following.imageUrl}
            isLive={follow.following.stream?.isLive}
          />
        ))}
      </ul>
    </div>
  );
};

export const FollowingSkeleton = () => {
  return (
    <ul className="px-2 pt-2 lg:pt-0">
      {[...Array(4)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};

export default Following;
