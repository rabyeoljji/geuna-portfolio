import { motion } from "framer-motion";
import MyWeddingSlide from "./MyWeddingSlide";
import MyWeddingTutorial from "./MyWeddingTutorial";
import NOTION_IMG from "../assets/image/project_screen/my_wedding/MYWEDDING_NOTION.png";
import GITHUB_IMG from "../assets/image/project_screen/my_wedding/MYWEDDING_GITHUB.png";

const MyWeddingProject = (): JSX.Element => {
  return (
    <>
      <motion.header
        initial={{ y: 50, opacity: 0.3 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="w-full flex flex-col items-start px-20 mt-40 mb-56 justify-self-start"
      >
        <p>SINGLE PROJECT</p>
        <h2 className="text-7xl font-extrabold">MY WEDDING</h2>
      </motion.header>
      <div className="w-screen bg-base-200 flex justify-center items-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1, delay: 0.3 }}
          className="mockup-browser border border-solid border-2 border-base-300 bg-base-300 w-4/5 h-[40vw] overflow-hidden my-80"
        >
          <div className="mockup-browser-toolbar">
            <div className="input">https://my-wedding-app.vercel.app/</div>
          </div>
          <div className="w-full h-[calc(40vw-3.25rem)] bg-base-200 overflow-hidden" id="myWeddingScreen">
            <MyWeddingSlide />
          </div>
          <MyWeddingTutorial />
        </motion.div>
      </div>
      <div className="project-detail w-4/5 flex justify-between items-center mt-40">
        <div className="card w-96 h-[80vh] bg-base-100 shadow-xl">
          <figure>
            <img src={NOTION_IMG} alt="MyWedding 프로젝트 노션" className="h-[40vh]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Notion</h2>
            <p>My Wedding 프로젝트의 기획 및 진행에 대한 전반적인 과정을 알 수 있는 노션 페이지입니다.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-md w-[30%]">Notion으로</button>
            </div>
          </div>
        </div>
        <div className="card w-96 h-[80vh] bg-base-100 shadow-xl">
          <figure>
            <img src={GITHUB_IMG} alt="MyWedding 프로젝트 github" className="h-[40vh]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">GitHub</h2>
            <p>My Wedding 프로젝트의 구체적인 코드구성을 알 수 있는 GitHub 페이지입니다.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-md w-[30%]">GitHub으로</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWeddingProject;
