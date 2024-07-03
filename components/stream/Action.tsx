"use client";
import React, { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useAuth } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { onFollow, onUnfollow } from "@/action/follow";
import { toast } from "sonner";
import { Skeleton } from "../ui/skeleton";

interface ActionProps {
  hostIdentity: string;
  isFollowing: boolean;
  isHost: boolean;
}

const Action = ({ hostIdentity, isFollowing, isHost }: ActionProps) => {
  const router = useRouter();
  const { userId } = useAuth();
  const [isPending, startTransition] = useTransition();

  const toggleFollow = async () => {
    if (!userId) {
      router.push("/sign-in");
      return;
    }
    if (isHost) {
      return;
    }
    if (isFollowing) {
      startTransition(() => {
        onUnfollow(hostIdentity)
          .then((data) =>
            toast.success(`You have unfollowed ${data.following.username}`)
          )
          .catch(() => toast.error("Failed To Unfollow"));
      });
    } else {
      startTransition(() => {
        onFollow(hostIdentity)
          .then((data) =>
            toast.success(`You have followed ${data.following.username}`)
          )
          .catch(() => toast.error("Failed to Follow"));
      });
    }
  };

  return (
    <Button
      disabled={isHost || isPending}
      variant="primary"
      size="sm"
      className="w-full lg:w-auto"
      onClick={toggleFollow}
    >
      <Heart
        className={cn("h-4 w-4 mr-2", isFollowing ? "fill-white" : "fill-none")}
      />
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export const ActionSkeleton = () => {
  return <Skeleton className="h-10 w-full lg:w-24" />;
};

export default Action;
