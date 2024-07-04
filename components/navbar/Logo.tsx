import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex rounded-full p-1 hover:transition hover:rotate-[360deg] hover:duration-700 mr-2">
        <Image src="/Stream.svg" alt="Syncro" height={40} width={40} />
      </div>
    </Link>
  );
};

export default Logo;
