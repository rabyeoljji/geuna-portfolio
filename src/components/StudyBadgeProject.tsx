import { motion } from "framer-motion";
import NOTION_IMG from "../assets/image/project_screen/study_badge/STUDYBADGE_NOTION.png";
import GITHUB_IMG from "../assets/image/project_screen/study_badge/STUDYBADGE_GITHUB.png";
import { useSetAtom } from "jotai";
import { tutorialAtom } from "../store/project";
import { useEffect } from "react";
import StudyBadgeSlide from "./StudyBadgeSlide";
import StudyBadgeTutorial from "./StudyBadgeTutorial";

const StudyBadgeProject = (): JSX.Element => {
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
        <h2 className="text-5xl md:text-7xl font-extrabold">STUDY BADGE</h2>
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
            <div className="badge bg-zinc-400 text-black font-semibold m-1">Zustand</div>
            <div className="badge bg-sky-400 text-black font-semibold m-1">TailwindCSS</div>
            <div className="badge bg-red-300 text-black font-semibold m-1">Styled-Component</div>
            <div className="badge bg-indigo-500 text-white m-1">Vite</div>
            <div className="badge bg-red-400 text-black font-semibold m-1">React-Query</div>
            <div className="badge bg-black text-white m-1">MSW</div>
            <div className="badge bg-blue-500 text-white m-1">SSE</div>
            <div className="badge bg-violet-700 text-white m-1">Axios</div>
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
            <div className="input">https://study-badge.vercel.app/</div>
          </div>
          <div className="w-full h-[calc(40vw-3.25rem)] bg-base-200 overflow-hidden" id="studyBadgeScreen">
            <StudyBadgeSlide isMobile={false} />
          </div>
          <StudyBadgeTutorial isMobile={false} />
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
              <StudyBadgeSlide isMobile={true} />
            </div>
          </div>
          <StudyBadgeTutorial isMobile={true} />
        </motion.div>
      </div>
      <div className="project-detail w-4/5 flex flex-col lg:flex-row justify-between items-center mt-40">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1 }}
          className="card max-w-96 h-[50vh] min-h-[25rem] md:h-[60vh] lg:h-[80vh] bg-base-100 shadow-xl mb-8 lg:mb-0"
        >
          <figure className="h-1/2 min-h-44 bg-black">
            <img src={NOTION_IMG} alt="StudyBadge 프로젝트 노션" className="max-h-[40vh]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Notion</h2>
            <p>Study Badge 프로젝트의 기획 및 진행에 대한 전반적인 과정을 알 수 있는 노션 페이지입니다.</p>
            <div className="card-actions justify-center">
              <a
                href="https://tenten-studybadge.notion.site/StudyBadge-88869c57effe4ef2a33ea393c594bcf4"
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
          className="card max-w-96 h-[50vh] min-h-[25rem] md:h-[60vh] lg:h-[80vh] bg-base-100 shadow-xl"
        >
          <figure className="h-1/2 min-h-44 bg-black">
            <img src={GITHUB_IMG} alt="StudyBadge 프로젝트 github" className="max-h-[40vh]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">GitHub</h2>
            <p>Study Badge 프로젝트의 구체적인 코드구성을 알 수 있는 GitHub 페이지입니다.</p>
            <div className="card-actions justify-center">
              <a
                href="https://github.com/StudyBadge-TenTen"
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

export default StudyBadgeProject;
