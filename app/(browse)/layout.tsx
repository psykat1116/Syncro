import Navbar from "@/components/browse/Navbar";
import React from "react";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">{children}</div>
    </>
  );
};

export default BrowseLayout;
