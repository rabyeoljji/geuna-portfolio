import Introduce from "./Introduce";
import Career from "./Career";
import Contact from "./Contact";

const Index = (): JSX.Element => {
  return (
    <div className="w-4/5 flex flex-col justify-center items-center pb-32">
      <Introduce />
      <Career />
      <Contact />
    </div>
  );
};

export default Index;
