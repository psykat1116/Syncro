"use client";
import React from "react";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

import Hint from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { useCreatorSidebar } from "@/store/useCreatorSidebar";

const Toggle = () => {
  const { collapsed, onCollapse, onExpand } = useCreatorSidebar();

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed ? (
        <div className="hidden lg:flex w-full items-center justify-center pt-2 mb-2">
          <Hint asChild label={label} side="right">
            <Button onClick={onExpand} variant="ghost" className="h-auto p-2">
              <ArrowRightFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      ) : (
        <div className="p-3 pl-3 flex items-center w-full">
          <h1 className="text-xl font-semibold">Dashboard</h1>
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
      )}
    </>
  );
};

export default Toggle;
