import React from "react";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

const Action = async () => {
  return (
    <div className="flex items-center justify-end gap-x-2">
      <Button
        asChild
        size="sm"
        variant="ghost"
        className="text-muted-foreground hover:text-primary"
      >
        <Link href="/">
          <LogOut className="h-5 w-5 mr-2" />
          Exit
        </Link>
      </Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Action;
