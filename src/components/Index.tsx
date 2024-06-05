import Introduce from "./Introduce";
import Career from "./Career";
import Contact from "./Contact";

const Index = (): JSX.Element => {
  return (
    <div className="max-w-[1149px] flex flex-col justify-center items-center pb-32">
      <Introduce />
      <Career />
      <Contact />
    </div>
  );
};

export default Index;
