"use client";
import React, { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { onFollow, onUnfollow } from "@/action/follow";
import { toast } from "sonner";

interface ActionProps {
  isFollowing: boolean;
  userId: string;
}

const Action = ({ isFollowing, userId }: ActionProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch((err) => toast.error(err));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) =>
          toast.success(`You have unfollowed ${data.following.username}`)
        )
        .catch((err) => toast.error(err));
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={isFollowing ? handleUnfollow : handleFollow}
      variant="primary"
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default Action;
