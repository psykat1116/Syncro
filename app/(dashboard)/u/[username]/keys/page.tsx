import ConnectModal from "@/components/keys/ConnectModal";
import KeyCard from "@/components/keys/KeyCard";
import URLCard from "@/components/keys/URLCard";
import { Button } from "@/components/ui/button";
import { getSelf } from "@/lib/authService";
import { getStreamByUserId } from "@/lib/streamservice";
import React from "react";

const Page = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);

  if (!stream) {
    throw new Error("Stream not found");
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Keys & URLs</h1>
        <ConnectModal/>
      </div>
      <div className="space-y-4">
        <URLCard value={stream.serverUrl} />
        <KeyCard value={stream.streamKey} />
      </div>
    </div>
  );
};

export default Page;
