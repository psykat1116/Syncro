import { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import Results, { ResultSkeleton } from "@/components/search/Result";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { term?: string };
}): Promise<Metadata> {
  return {
    title: `Search results for "${searchParams.term}" | Syncro`,
  };
}

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
