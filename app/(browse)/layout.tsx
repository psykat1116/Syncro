import { Suspense } from "react";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/sidebar/Container";
import Sidebar, { SidebarSkeleton } from "@/components/sidebar/Sidebar";

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
