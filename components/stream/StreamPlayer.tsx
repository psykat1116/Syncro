"use client";
import React from "react";
import { Stream, User } from "@prisma/client";

import { LiveKitRoom } from "@livekit/components-react";

import { useViewerToken } from "@/hooks/useViewerToken";
import Video from "@/components/stream/Video";

interface StreamPlayerProps {
  user: User & { stream: Stream | null };
  stream: Stream | null;
  isFollowing: boolean;
}

const StreamPlayer = ({ user, stream, isFollowing }: StreamPlayerProps) => {
  const { token, name, identity } = useViewerToken(user.id);

  if (!token || !identity || !name) {
    return <div>Cannot Watch The Stream</div>;
  }

  return (
    <>
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        className="grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full"
      >
        <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
          <Video hostname={user.username} hostIdentity={user.id} />
        </div>
      </LiveKitRoom>
    </>
  );
};

export default StreamPlayer;
