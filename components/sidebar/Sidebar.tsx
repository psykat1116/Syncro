import Wrapper from "@/components/sidebar/Wrapper";
import Toggle, { ToggleSkeleton } from "@/components/sidebar/Toggle";
import Recommended, { RecommendedSkeleton } from "@/components/sidebar/Recommended";
import Following, { FollowingSkeleton } from "@/components/sidebar/Following";
import { Separator } from "@/components/ui/separator";

import { getRecommendations } from "@/lib/recomendation";
import { getFollowedUser } from "@/lib/followService";

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
