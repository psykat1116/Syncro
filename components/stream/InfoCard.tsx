"use client";
import Image from "next/image";
import { Pencil } from "lucide-react";

import InfoModal from "@/components/stream/InfoModal";
import { Separator } from "@/components/ui/separator";

interface InfoCardProps {
  hostIdentity: string;
  viewerIdentity: string;
  name: string;
  thumbnailUrl: string | null;
}

const InfoCard = ({
  hostIdentity,
  viewerIdentity,
  name,
  thumbnailUrl,
}: InfoCardProps) => {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  if (!isHost) {
    return null;
  }

  return (
    <div className="px-4">
      <div className="rounded-xl bg-background">
        <div className="flex items-center justify-between gap-x-2.5 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-md p-2.5 h-auto w-auto bg-blue-600">
              <Pencil className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-sm lg:text-lg font-semibold capitalize">
                Edit your stream info
              </h2>
              <p className="text-muted-foreground text-xs lg:text-sm">
                Maximize Your Visibility
              </p>
            </div>
          </div>
          <InfoModal initialName={name} initialThumbnail={thumbnailUrl} />
        </div>
        <Separator />
        <div className="p-4 lg:p-6 space-y-3">
          <div>
            <h3 className="text-sm text-muted-foreground mb-1">Name</h3>
            <p className="text-sm font-semibold">{name}</p>
          </div>
          <div>
            <h3 className="text-sm text-muted-foreground mb-1">Thumbnail</h3>
            {thumbnailUrl && (
              <div className="relative aspect-video rounded-md overflow-hidden w-[200px] border border-white/10">
                <Image
                  fill
                  alt={name}
                  src={thumbnailUrl}
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
