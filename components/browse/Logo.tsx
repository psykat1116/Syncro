import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden lg:flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1">
          <Image src="/Stream.svg" alt="Syncro" height={32} width={32} />
        </div>
        <div>
          <p className="text-lg font-semibold">Syncro</p>
          <p className="text-xs text-muted-foreground">
            Let&apos;s Play The Game
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
