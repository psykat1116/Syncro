import React from "react";
import { StreamPlayerSkeleton } from "@/components/stream/StreamPlayer";

const Loading = () => {
  return (
    <div className="h-full">
      <StreamPlayerSkeleton />
    </div>
  );
};

export default Loading;
