import React from "react";
import Wrapper from "./Wrapper";
import Toggle from "./Toggle";
import Navigation from "./Navigation";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  return (
    <Wrapper>
      <Toggle />
      <Separator />
      <Navigation/>
    </Wrapper>
  );
};

export default Sidebar;
