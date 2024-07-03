"use client";
import React, { useTransition } from "react";
import { toast } from "sonner";

import { onUnBlock } from "@/action/block";
import { Button } from "@/components/ui/button";

interface UnblockButtonProps {
  userId: string;
}

const UnblockButton = ({ userId }: UnblockButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const handleUnblock = async () => {
    startTransition(() => {
      onUnBlock(userId)
        .then((res) => toast.success(`User ${res.blocked.username} Unblocked`))
        .catch(() => toast.error("Failed To Unblock User"));
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={handleUnblock}
      variant="link"
      size="sm"
      className="text-blue-500 w-full"
    >
      Unblock
    </Button>
  );
};

export default UnblockButton;
