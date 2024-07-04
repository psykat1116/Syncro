import { Metadata } from "next";

import StreamPlayer from "@/components/stream/StreamPlayer";
import { getUserByUsername } from "@/lib/userService";
import { currentUser } from "@clerk/nextjs/server";

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}): Promise<Metadata> {
  const user = await getUserByUsername(params.username);

  if (!user || !user.stream) {
    return {
      title: "404 User not found | Syncro",
      description: "The user you are looking for does not exist.",
    };
  }

  return {
    title: `Dashboard | Syncro`,
    openGraph: {
      images: [
        {
          url: user.stream.thumbnailUrl || user.imageUrl,
          alt: `${user.username}'s Stream Thumbnail`,
          height: 720,
          width: 1280,
        },
      ],
      url: `https://syncro-eight.vercel.app/u/${params.username}`,
      type: "video.other",
      siteName: `Syncro | ${user.username}'s Dashboard`,
    },
  };
}

interface PageProps {
  params: {
    username: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const extenralUser = await currentUser();
  const user = await getUserByUsername(params.username);

  if (!user || user.externalUserId !== extenralUser?.id || !user.stream) {
    throw new Error("Unauthorized");
  }

  return (
    <div className="h-full">
      <StreamPlayer user={user} stream={user.stream} isFollowing />
    </div>
  );
};

export default Page;
