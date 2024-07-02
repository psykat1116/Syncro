import React from "react";
import { Input } from "../ui/input";
import CopyButton from "./CopyButton";

interface URLCardProps {
  value: string | null;
}

const URLCard = ({ value }: URLCardProps) => {
  return (
    <div className="rounded-xl bg-muted p-4">
      <div className="flex flex-col lg:flex-row items-start gap-y-3 lg:gap-x-10">
        <p className="font-semibold shrink-0 truncate">Server URL</p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input disabled value={value || ""} placeholder="Server URL" />
            <CopyButton value={value || ""}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default URLCard;
