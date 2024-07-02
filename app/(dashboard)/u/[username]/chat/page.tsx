import React from "react";

import { Settings } from "lucide-react";

import ToggleCard from "@/components/chat/ToggleCard";
import { getSelf } from "@/lib/authService";
import { getStreamByUserId } from "@/lib/streamservice";

const Page = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);

  if (!stream) {
    throw new Error("Stream not found");
  }

  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold flex items-center">
          <Settings className="h-6 w-6 mr-2"/>
          Chat Settings
        </h1>
      </div>
      <div className="space-y-4">
        <ToggleCard
          field="isChatEnabled"
          label="Enable Chat"
          value={stream.isChatEnabled}
        />
        <ToggleCard
          field="isChatDelayed"
          label="Delay Chat"
          value={stream.isChatDelayed}
        />
        <ToggleCard
          field="isChatFollowersOnly"
          label="Must Be Following To Chat"
          value={stream.isChatFollowersOnly}
        />
      </div>
    </div>
  );
};

export default Page;
