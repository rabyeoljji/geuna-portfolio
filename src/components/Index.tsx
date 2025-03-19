import Introduce from "./Introduce";
import Career from "./Career";
import Contact from "./Contact";
import { useEffect } from "react";

const Index = (): JSX.Element => {
  useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", "rgba(0,0,0,0)"); // 유사 투명 효과
    }
  }, []);

  return (
    <div className="w-4/5 max-w-[1149px] flex flex-col justify-center items-center pb-32">
      <Introduce />
      <Career />
      <Contact />
    </div>
  );
};

export default Index;
