import Logo from "@/components/auth/Logo";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-[url('/Background.png')] bg-cover bg-center bg-no-repeat space-y-3">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
