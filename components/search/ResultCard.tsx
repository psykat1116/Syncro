import React from "react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Stream, User } from "@prisma/client";

import Thumbnail, { ThumbnailSkeleton } from "@/components/Thumbnail";
import Verified from "@/components/Verified";
import { Skeleton } from "@/components/ui/skeleton";

type ModifiedStream = {
  id: string;
  thumbnailUrl: string | null;
  name: string;
  isLive: boolean;
  updatedAt: Date;
};

interface ResultCardProps {
  data: ModifiedStream & { user: User };
}

const ResultCard = ({ data }: ResultCardProps) => {
  return (
    <Link href={`/${data.user.username}`}>
      <div className="w-full flex gap-x-4">
        <div className="relative h-[9rem] w-[16rem]">
          <Thumbnail
            src={data.thumbnailUrl}
            fallback={data.user.imageUrl}
            isLive={data.isLive}
            username={data.user.username}
          />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-x-2">
            <p className="font-bold text-lg cursor-pointer hover:text-blue-500">
              {data.user.username}
            </p>
            <Verified />
          </div>
          <p className="text-sm text-muted-foreground">{data.name}</p>
          <p className="text-sm text-muted-foreground">
            {formatDistanceToNow(new Date(data.updatedAt), { addSuffix: true })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export const ResultCardSkeleton = () => {
  return (
    <div className="w-full flex gap-x-4">
      <div className="relative h-[9rem] w-[16rem]">
        <ThumbnailSkeleton />
      </div>
      <div className="space-y-2">
        <Skeleton className="w-4 h-32" />
        <Skeleton className="w-3 h-24" />
        <Skeleton className="w-3 h-12" />
      </div>
    </div>
  );
};

export default ResultCard;
