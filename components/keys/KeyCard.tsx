"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import CopyButton from "./CopyButton";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

interface KeyCardProps {
  value: string | null;
}

const KeyCard = ({ value }: KeyCardProps) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="rounded-xl bg-muted p-4">
      <div className="flex flex-col lg:flex-row items-start gap-y-3 lg:gap-x-10">
        <p className="font-semibold shrink-0 truncate">
          Stream Key
        </p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              value={value || ""}
              type={show ? "text" : "password"}
              disabled
              placeholder="Stream Key"
            />
            <CopyButton value={value || ""} />
          </div>
          <Button size="sm" variant="link" onClick={handleShow}>
            {show ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export const KeyCardSkeleton = () => {
  return <Skeleton className="rounded-xl p-6 w-full h-20" />;
};

export default KeyCard;
