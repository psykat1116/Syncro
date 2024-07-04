"use client";
import { toast } from "sonner";
import React, { useTransition } from "react";

import { Switch } from "@/components/ui/switch";
import { updateStream } from "@/action/stream";
import { Skeleton } from "@/components/ui/skeleton";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
  field: FieldTypes;
  label: string;
  value: boolean;
}

const ToggleCard: React.FC<ToggleCardProps> = ({ field, label, value }) => {
  const [isPending, startTransition] = useTransition();
  const handleChange = async () => {
    startTransition(() => {
      updateStream({
        [field]: !value,
      })
        .then(() => {
          toast.success("Chat settings updated");
        })
        .catch(() => {
          toast.error("Failed to update chat settings");
        });
    });
  };
  return (
    <div className="rounded-xl bg-muted p-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0 truncate">{label}</p>
        <div className="space-y-2">
          <Switch
            disabled={isPending}
            onCheckedChange={handleChange}
            checked={value}
          >
            {value ? "On" : "Off"}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export const ToggleCardSkeleton = () => {
  return <Skeleton className="rounded-xl p-6 w-full" />;
};

export default ToggleCard;
