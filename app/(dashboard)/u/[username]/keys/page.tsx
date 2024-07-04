import { Link } from "lucide-react";

import ConnectModal from "@/components/keys/ConnectModal";
import KeyCard from "@/components/keys/KeyCard";
import URLCard from "@/components/keys/URLCard";
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
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold items-center flex">
          <Link className="h-5 w-5 mr-2" />
          Keys & URLs
        </h1>
        <ConnectModal />
      </div>
      <div className="space-y-4">
        <URLCard value={stream.serverUrl} />
        <KeyCard value={stream.streamKey} />
      </div>
    </div>
  );
};

export default Page;
