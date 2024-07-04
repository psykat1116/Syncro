"use client";
import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/useSidebar";
import { Skeleton } from "@/components/ui/skeleton";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

const Toggle = () => {
  const { collapsed, onCollapse, onExpand } = useSidebar();
  const label = collapsed ? "Expand" : "Collapse";
  return (
    <>
      {!collapsed ? (
        <div className="p-3 pl-3 flex items-center w-full">
          <h1 className="text-xl font-semibold">For you</h1>
          <Hint asChild label={label} side="right">
            <Button
              onClick={onCollapse}
              variant="ghost"
              className="h-auto p-2 ml-auto"
            >
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      ) : (
        <div className="hidden lg:flex w-full items-center justify-center pt-2 mb-2">
          <Hint asChild label={label} side="right">
            <Button onClick={onExpand} variant="ghost" className="h-auto p-2">
              <ArrowRightFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};

export const ToggleSkeleton = () => {
  return (
    <div className="p-3 pl-3 mb-2 hidden lg:flex items-center justify-between w-full">
      <Skeleton className="h-6 w-[100px]" />
      <Skeleton className="h-6 w-6" />
    </div>
  );
};

export default Toggle;
