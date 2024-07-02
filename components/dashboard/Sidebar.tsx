import React from "react";
import Wrapper from "./Wrapper";
import Toggle from "./Toggle";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <Wrapper>
      <Toggle />
      <Navigation/>
    </Wrapper>
  );
};

export default Sidebar;
