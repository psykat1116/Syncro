import { StreamPlayerSkeleton } from "@/components/stream/StreamPlayer";
import React from "react";

const loading = () => {
  return (
    <div className="h-full">
      <StreamPlayerSkeleton />
    </div>
  );
};

export default loading;
