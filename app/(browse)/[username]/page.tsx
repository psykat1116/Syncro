import React from "react";

interface PageProps {
  params: {
    username: string;
  };
}

const Page:React.FC<PageProps> = ({params}) => {
  return <div>Page</div>;
};

export default Page;
