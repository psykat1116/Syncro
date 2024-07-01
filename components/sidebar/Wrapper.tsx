"use client";
import React from "react";
import { useSidebar } from "@/store/useSidebar";
import { cn } from "@/lib/utils";
import { RecommendedSkeleton } from "./Recommended";
import { ToggleSkeleton } from "./Toggle";
import { useIsClient } from "usehooks-ts";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const isClient = useIsClient();
  const { collapsed } = useSidebar();

  if (!isClient)
    return (
      <aside className="fixed left-0 flex-col flex w-[60px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50">
        <ToggleSkeleton />
        <RecommendedSkeleton />
      </aside>
    );

  return (
    <aside
      className={cn(
        "fixed left-0 flex-col flex w-60 h-full bg-background border-r border-[#2d2e35] z-50",
        collapsed && "w-[60px]"
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
