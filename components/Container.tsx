"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";
import { useMediaQuery } from "usehooks-ts";
import React, { useEffect } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const matches = useMediaQuery("(max-width: 1024px)");
  const { collapsed, onCollapse, onExpand } = useSidebar();

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches, onCollapse, onExpand]);

  return (
    <div
      className={cn("flex-1", collapsed ? "ml-[60px]" : "ml-[60px] lg:ml-60")}
    >
      {children}
    </div>
  );
};

export default Container;
