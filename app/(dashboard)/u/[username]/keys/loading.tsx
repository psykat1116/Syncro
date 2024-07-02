import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ToggleCardSkeleton } from "@/components/chat/ToggleCard";
import { URLCardSkeleton } from "@/components/keys/URLCard";
import { KeyCardSkeleton } from "@/components/keys/KeyCard";

const Loading = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-10 w-[200px]" />
        <Skeleton className="h-10 w-[220px]" />
      </div>
      <div className="space-y-4">
        <URLCardSkeleton />
        <KeyCardSkeleton />
      </div>
    </div>
  );
};

export default Loading;
