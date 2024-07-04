"use client";
import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/useCreatorSidebar";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { collapsed } = useCreatorSidebar();
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-[60px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50",
        collapsed && "lg:w-[60px]"
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
