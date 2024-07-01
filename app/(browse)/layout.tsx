import React, { Suspense } from "react";
import Navbar from "@/components/navbar/Navbar";
import Sidebar, { SidebarSkeleton } from "@/components/sidebar/Sidebar";
import Container from "@/components/Container";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
