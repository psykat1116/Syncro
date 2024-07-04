import { cn } from "@/lib/utils";

interface LiveBatchProps {
  className?: string;
}

const LiveBatch: React.FC<LiveBatchProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-rose-500 px-1.5 rounded-md uppercase text-[10px] border border-background tracking-wide font-semibold flex items-center justify-center",
        className
      )}
    >
      Live
    </div>
  );
};

export default LiveBatch;
