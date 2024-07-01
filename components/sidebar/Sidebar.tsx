import React from "react";
import Wrapper from "./Wrapper";
import Toggle, { ToggleSkeleton } from "./Toggle";
import Recommended, { RecommendedSkeleton } from "./Recommended";
import { getRecommendations } from "@/lib/recomendation";

const Sidebar = async () => {
  const recomended = await getRecommendations();
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-2 lg:-mt-2">
        <Recommended data={recomended} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[60px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50">
      <ToggleSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};

export default Sidebar;
