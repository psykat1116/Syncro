import { redirect } from "next/navigation";

import { getSelfByUsername } from "@/lib/authService";
import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import Container from "@/components/dashboard/Container";

interface DashBoardLayoutProps {
  children: React.ReactNode;
  params: {
    username: string;
  };
}

const DashBoardLayout = async ({ children, params }: DashBoardLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default DashBoardLayout;
