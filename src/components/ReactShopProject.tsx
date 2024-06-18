import { motion } from "framer-motion";
import NOTION_IMG from "../assets/image/project_screen/react_shop/REACT_SHOP_NOTION.png";
import GITHUB_IMG from "../assets/image/project_screen/react_shop/REACT_SHOP_GITHUB.png";
import { useSetAtom } from "jotai";
import { tutorialAtom } from "../store/project";
import { useEffect } from "react";
import ReactShopSlide from "./ReactShopSlide";
import ReactShopTutorial from "./ReactShopTutorial";

const ReactShopProject = (): JSX.Element => {
  const setTutorialIdx = useSetAtom(tutorialAtom);

  useEffect(() => {
    setTutorialIdx(() => 0);
    return setTutorialIdx(() => 0);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: 50, opacity: 0.3 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="w-full flex flex-col items-start px-20 mt-40 mb-56 justify-self-start"
      >
        <p>CLONE CODING</p>
        <h2 className="text-5xl md:text-7xl font-extrabold">REACT SHOP</h2>
      </motion.header>
      <div className="w-screen bg-base-200 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1, delay: 0.1 }}
          className="badge-container w-4/5 flex flex-col justify-center items-center mt-80 p-10 bg-base-300 rounded-3xl md:rounded-full"
        >
          <h3 className="mb-8 text-xl font-bold">기술스택</h3>
          <div className="badge-container flex flex-wrap justify-center items-center">
            <div className="badge bg-cyan-300 text-black font-semibold m-1">React</div>
            <div className="badge bg-blue-800 text-white m-1">TypeScript</div>
            <div className="badge bg-fuchsia-900 text-white m-1">FakeStoreAPI</div>
            <div className="badge bg-zinc-400 text-black font-semibold m-1">Jotai</div>
            <div className="badge bg-sky-400 text-black font-semibold m-1">TailwindCSS</div>
            <div className="badge bg-violet-700 text-white m-1">Vite</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1, delay: 0.3 }}
          className="mockup-browser hidden md:block border border-solid border-2 border-base-300 bg-base-300 w-4/5 h-[40vw] overflow-hidden mt-40 mb-80 relative"
        >
          <div className="mockup-browser-toolbar">
            <div className="input">https://react-shop-geunana.vercel.app/</div>
          </div>
          <div className="w-full h-[calc(40vw-3.25rem)] bg-base-200 overflow-hidden" id="myWeddingScreen">
            <ReactShopSlide isMobile={false} />
          </div>
          <ReactShopTutorial isMobile={false} />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1, delay: 0.3 }}
          className="mockup-phone md:hidden w-4/5 h-[153vw] overflow-hidden mt-40 mb-80 relative"
        >
          <div className="camera"></div>
          <div className="display w-full h-[140vw] overflow-hidden">
            <div className="artboard artboard-demo phone-1 w-full overflow-hidden">
              <ReactShopSlide isMobile={true} />
            </div>
          </div>
          <ReactShopTutorial isMobile={true} />
        </motion.div>
      </div>
      <div className="project-detail w-4/5 flex flex-col lg:flex-row justify-between items-center mt-40">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1 }}
          className="card max-w-96 h-[50vh] md:h-[60vh] lg:h-[80vh] bg-base-100 shadow-xl mb-8 lg:mb-0"
        >
          <figure className="h-1/2 bg-black">
            <img src={NOTION_IMG} alt="MyWedding 프로젝트 노션" className="max-h-[40vh]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Notion</h2>
            <p>React Shop 프로젝트의 진행과정을 알 수 있는 노션 페이지입니다.</p>
            <div className="card-actions justify-center">
              <a
                href="https://na-s-note-page.notion.site/React-Shop-6411da812bd34d108d3d2e308d5bbc49"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md w-[45%] text-xs md:text-base"
              >
                Notion으로
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1 }}
          className="card max-w-96 h-[50vh] md:h-[60vh] lg:h-[80vh] bg-base-100 shadow-xl"
        >
          <figure className="h-1/2 bg-black">
            <img src={GITHUB_IMG} alt="MyWedding 프로젝트 github" className="max-h-[40vh]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">GitHub</h2>
            <p>React Shop 프로젝트의 구체적인 코드구성을 알 수 있는 GitHub 페이지입니다.</p>
            <div className="card-actions justify-center">
              <a
                href="https://github.com/rabyeoljji/React-shop"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md w-[45%] text-xs md:text-base"
              >
                GitHub으로
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ReactShopProject;
