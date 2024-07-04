import { Metadata } from "next";
import { notFound } from "next/navigation";

import { isBlockedByUser } from "@/lib/blockService";
import { isFollowingUser } from "@/lib/followService";
import { getUserByUsername } from "@/lib/userService";
import StreamPlayer from "@/components/stream/StreamPlayer";

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
    title: `${user.username}'s Stream | Syncro`,
    description: `Watch ${user.username}'s stream on Syncro.`,
    openGraph: {
      images: [
        {
          url: user.stream.thumbnailUrl || user.imageUrl,
          alt: `${user.username}'s stream thumbnail`,
          height: 720,
          width: 1280,
        },
      ],
      url: `https://syncro-eight.vercel.app/${params.username}`,
      type: "video.other",
      siteName: `Syncro | ${user.username}'s Stream`,
    },
  };
}

interface PageProps {
  params: {
    username: string;
  };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const user = await getUserByUsername(params.username);

  if (!user || !user.stream) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) {
    notFound();
  }

  return (
    <StreamPlayer user={user} stream={user.stream} isFollowing={isFollowing} />
  );
};

export default Page;
