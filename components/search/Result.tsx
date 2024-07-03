import { getSearch } from "@/lib/searchService";
import { Skeleton } from "@/components/ui/skeleton";
import ResultCard, { ResultCardSkeleton } from "@/components/search/ResultCard";

interface ResultsProps {
  term?: string;
}

const Result = async ({ term }: ResultsProps) => {
  const data = await getSearch(term);
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Results For Term &quot;{term}&quot;
      </h2>
      {data.length === 0 && (
        <p className="text-muted-foreground text-sm capitalize">
          No results found. Try searching for something else
        </p>
      )}
      <div className="flex flex-col gap-y-4">
        {data.map((result) => (
          <ResultCard data={result} key={result.id} />
        ))}
      </div>
    </div>
  );
};

export const ResultSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-[300px] h-8 mb-4" />
      <div className="flex flex-col gap-y-4">
        {[...Array(5)].map((_, index) => (
          <ResultCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default Result;
