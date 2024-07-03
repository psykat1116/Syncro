"use client";
import React from "react";
import Verified from "../Verified";
import BioModal from "./BioModal";

interface AboutCardProps {
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  bio: string | null;
  followedByCount: number;
}

const AboutCard = ({
  hostIdentity,
  hostName,
  viewerIdentity,
  bio,
  followedByCount,
}: AboutCardProps) => {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  const followedByLabel = followedByCount === 1 ? "Follower" : "Followers";

  return (
    <div className="px-4">
      <div className="group rounded-xl bg-background p-4 lg:p-6 flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 font-semibold text-lg lg:text-2xl">
            About {hostName}
            <Verified />
          </div>
          {isHost && <BioModal initialValue={bio} />}
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-primary">{followedByCount}</span>{" "}
          {followedByLabel}
        </div>
        <p className="text-sm bg-black/20 p-2 rounded-sm">
          {bio || (
            <p className="text-muted-foreground uppercase italic">
              This user prefers to keep an air of mystery about them.
            </p>
          )}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
