"use client";
import { useSidebar } from "@/store/useSidebar";
import { User } from "@prisma/client";
import React from "react";
import UserItem, { UserItemSkeleton } from "./UserItem";

interface RecommendedProps {
  data: User[];
}

const Recommended = ({ data }: RecommendedProps) => {
  const { collapsed } = useSidebar();
  //   const showLabel = !collapsed && data.length > 0;
  return (
    <div>
      {/* {showLabel && (
        <div className="pl-3 mb-4 -mt-2">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )} */}
      <ul className="space-y-2 -mt-2">
        {data.map((user) => (
          <UserItem
            key={user.id}
            username={user.username}
            imageUrl={user.imageUrl}
            isLive={true}
          />
        ))}
      </ul>
    </div>
  );
};

export const RecommendedSkeleton = () => {
  return (
    <ul className="px-2">
      {[...Array(5)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};

export default Recommended;
