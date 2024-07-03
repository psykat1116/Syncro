import Results, { ResultSkeleton } from "@/components/search/Result";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

interface PageProps {
  searchParams: {
    term?: string;
  };
}

const Page: React.FC<PageProps> = ({ searchParams }) => {
  if (!searchParams.term) {
    redirect("/");
  }
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<ResultSkeleton />}>
        <Results term={searchParams.term} />
      </Suspense>
    </div>
  );
};

export default Page;
