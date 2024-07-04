import { SignIn } from "@clerk/nextjs";

export async function generateMetadata() {
  return {
    title: "Syncro | Sign In",
    description: "Sign In For Starting The Game With Syncro",
  };
}

const Page = () => {
  return <SignIn />;
};

export default Page;
