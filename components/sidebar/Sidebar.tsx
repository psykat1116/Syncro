import React from "react";

import Wrapper from "./Wrapper";
import Toggle, { ToggleSkeleton } from "./Toggle";
import Recommended, { RecommendedSkeleton } from "./Recommended";
import Following, { FollowingSkeleton } from "./Following";

import { getRecommendations } from "@/lib/recomendation";
import { getFollowedUser } from "@/lib/followService";
import { Separator } from "@/components/ui/separator";

const Sidebar = async () => {
  const recomended = await getRecommendations();
  const following = await getFollowedUser();
  return (
    <Wrapper>
      <Toggle />
      <Separator />
      <div className="space-y-2 pt-2 lg:pt-0">
        <Following data={following} />
        <Separator className="lg:hidden" />
        <Recommended data={recomended} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[60px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};

export default Sidebar;
