import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>Hello World</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
