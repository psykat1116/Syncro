import React, { Suspense } from "react";
import Result, { ResultSkeleton } from "@/components/home/Result";

export default function Home() {
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<ResultSkeleton />}>
        <Result />
      </Suspense>
    </div>
  );
}
