import { motion } from "framer-motion";
import GITHUB_IMG from "../assets/image/project_screen/picktoss/PICKTOSS_GITHUB.png";
import { useSetAtom } from "jotai";
import { tutorialAtom } from "../store/project";
import { useEffect } from "react";
import PicktossSlide from "./PicktossSlide";

const PicktossProject = (): JSX.Element => {
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
        <p>TEAM PROJECT</p>
        <h2 className="text-5xl md:text-7xl font-extrabold">PICKTOSS</h2>
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
            <div className="badge bg-black text-white m-1">Next.js</div>
            <div className="badge bg-blue-800 text-white m-1">TypeScript</div>
            <div className="badge bg-red-400 text-black font-semibold m-1">React Query</div>
            <div className="badge bg-zinc-400 text-black font-semibold m-1">Context API</div>
            <div className="badge bg-stone-700 text-white m-1">Zustand</div>
            <div className="badge bg-sky-400 text-black font-semibold m-1">TailwindCSS</div>
            <div className="badge bg-yellow-300 text-black font-semibold m-1">FCM</div>
            <div className="badge bg-violet-700 text-white m-1">Axios</div>
            <div className="badge bg-black text-white m-1">Vercel</div>
            <div className="badge bg-blue-600 text-white m-1">Github Actions</div>
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
            <div className="input">https://picktoss.com</div>
          </div>
          <div className="w-full h-[calc(40vw-3.25rem)] bg-base-200 overflow-hidden" id="picktossScreen">
            <PicktossSlide isMobile={false} />
          </div>

          <a
            href="https://picktoss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 flex items-center justify-center"
          >
            <span
              className={`loading loading-ring loading-lg w-48 text-gray-500 hidden md:inline-block absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2`}
            ></span>
            <div className="btn btn-md w-full text-xs md:text-base">Picktoss 바로가기</div>
          </a>
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
              <PicktossSlide isMobile={true} />
            </div>
          </div>

          <a
            href="https://picktoss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 flex items-center justify-center"
          >
            <span
              className={`loading loading-ring loading-lg w-48 text-gray-500 md-hidden absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2`}
            ></span>
            <div className="btn btn-md w-full text-xs md:text-base ">Picktoss 바로가기</div>
          </a>
        </motion.div>
      </div>
      <div className="project-detail w-4/5 flex flex-col lg:flex-row justify-center  items-center mt-40">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1 }}
          className="card lg:card-side bg-base-100 shadow-xl"
        >
          <figure className="h-1/2 min-h-44 bg-black">
            <img src={GITHUB_IMG} alt="Picktoss 프로젝트 github" className="max-h-[40vh]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">GitHub</h2>
            <p>Picktoss 프로젝트의 구체적인 코드구성을 알 수 있는 GitHub 페이지입니다.</p>
            <div className="card-actions justify-center mt-[30px] xl:mt-0">
              <a
                href="https://github.com/picktoss/pick-toss-next/tree/main"
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

export default PicktossProject;
