"use client";
import { useSidebar } from "@/store/useSidebar";
import { Stream, User } from "@prisma/client";
import React from "react";
import UserItem, { UserItemSkeleton } from "./UserItem";

interface RecommendedProps {
  data: (User & { stream: {isLive: boolean} | null })[];
}

const Recommended = ({ data }: RecommendedProps) => {
  const { collapsed } = useSidebar();
  const showLabel = !collapsed && data.length > 0;
  return (
    <div>
      {showLabel && (
        <div className="pl-3 mb-2">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}
      <ul className="space-y-2">
        {data.map((user) => (
          <UserItem
            key={user.id}
            username={user.username}
            imageUrl={user.imageUrl}
            isLive={user.stream?.isLive}
          />
        ))}
      </ul>
    </div>
  );
};

export const RecommendedSkeleton = () => {
  return (
    <ul className="px-2">
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};

export default Recommended;
