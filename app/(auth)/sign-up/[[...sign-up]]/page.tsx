import { SignUp } from "@clerk/nextjs";

export async function generateMetadata() {
  return {
    title: "Syncro | Sign Up",
    description: "Sign Up For Starting The Game With Syncro",
  };
}

const Page = () => {
  return <SignUp />;
};

export default Page;
