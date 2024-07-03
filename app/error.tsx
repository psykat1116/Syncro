"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <p className="capitalize">Something went wrong.</p>
      <Button variant="secondary" asChild>
        <Link href="/">Go Back</Link>
      </Button>
    </div>
  );
};

export default Error;
