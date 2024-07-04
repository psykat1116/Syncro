import Wrapper from "@/components/dashboard/Wrapper";
import Toggle from "@/components/dashboard/Toggle";
import Navigation from "@/components/dashboard/Navigation";
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
