import { StreamPlayerSkeleton } from "@/components/stream/StreamPlayer";

const loading = () => {
  return (
    <div className="h-full">
      <StreamPlayerSkeleton />
    </div>
  );
};

export default loading;
