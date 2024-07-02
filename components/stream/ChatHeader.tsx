"use client";
import { Skeleton } from "@/components/ui/skeleton";
import ChatToggle from "@/components/stream/ChatToggle";
import VariantToggle from "@/components/stream/VariantToggle";

const ChatHeader = () => {
  return (
    <div className="relative p-3 border-b">
      <div className="absolute left-2 top-2 hidden lg:block">
        <ChatToggle />
      </div>
      <p className="font-semibold text-primary text-center">Stream Chat</p>
      <div className="absolute right-2 top-2">
        <VariantToggle />
      </div>
    </div>
  );
};

export const ChatHeaderSkeleton = () => {
  return (
    <div className="relative p-3 border-b hidden md:block">
      <Skeleton className="absolute w-6 h-6 left-3 top-3" />
      <Skeleton className="w-28 h-6 mx-auto" />
    </div>
  );
};

export default ChatHeader;
