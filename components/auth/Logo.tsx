import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-white rounded-full p-2">
        <Image src="/Stream.svg" alt="Stream" width={30} height={30} />
      </div>
      <div className="flex flex-col items-start">
        <p className="text-xl font-semibold">Syncro</p>
        <p className="text-sm text-muted-foreground">
          Let&apos;s Play The Game
        </p>
      </div>
    </div>
  );
};

export default Logo;
