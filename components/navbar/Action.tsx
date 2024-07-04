import Link from "next/link";
import { CirclePlay, Clapperboard } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

const Action = async () => {
  const user = await currentUser();
  return (
    <div className="flex items-center justify-end gap-x-2 ml-2">
      {!user ? (
        <SignInButton>
          <Button size="sm" variant="primary" className="flex items-center">
            <CirclePlay className="h-5 w-5 md:h-4 md:w-4" />
            <p className="hidden md:block ml-2">Start Play</p>
          </Button>
        </SignInButton>
      ) : (
        <div className="flex items-center gap-x-2">
          <Button
            className="text-muted-foreground hover:text-primary"
            asChild
            variant="ghost"
            size="sm"
          >
            <Link href={`/u/${user.username}`}>
              <Clapperboard className="h-5 w-5 lg:mr-2" />
              <span className="hidden lg:block">Dashboard</span>
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
};

export default Action;
