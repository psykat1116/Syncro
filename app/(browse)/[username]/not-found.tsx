import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-6xl">404</h1>
      <p className="capitalize">
        We couldn&apos;t find the user you were looking for.
      </p>
      <Button variant="secondary" asChild>
        <Link href="/">Go Back</Link>
      </Button>
    </div>
  );
};

export default NotFound;
