import { motion } from "framer-motion";
import PROJECT_THUMBNAIL from "../assets/image/MYWEDDING_LOGIN.png";
import { spring } from "../animation/index_ani";
import { Link } from "react-router-dom";
import { useState } from "react";
import Project3DImage from "./Project3DImage";
import Edu3DImage from "./Edu3DImage";

const Career = (): JSX.Element => {
  const [isHoveredProject, setIsHoveredProject] = useState(false);
  const [isHoveredEdu, setIsHoveredEdu] = useState(false);

  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-screen bg-base-300 px-32 py-96 mt-96 flex justify-center items-center">
      <div className="w-[1149px]">
        <motion.div
          className="flex flex-col md:flex-row items-center mb-72"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ spring }}
          onHoverStart={() => setIsHoveredProject(true)}
          onHoverEnd={() => setIsHoveredProject(false)}
        >
          <motion.div
            animate={isHoveredProject ? { scale: 0.8 } : {}}
            className="w-1/2 h-[30vw] bg-base-100 rounded-xl mb-20 md:mb-0 md:mr-20"
          >
            <img
              src={PROJECT_THUMBNAIL}
              className={`${isHoveredProject ? "hidden" : ""} object-cover h-full rounded-xl dark:opacity-60`}
            />
            <Project3DImage isHovered={isHoveredProject} />
          </motion.div>
          <motion.div className="flex flex-col justify-center">
            <h2 className="text-5xl font-bold">PROJECT</h2>
            <Link to={"/project"} className="btn btn-sm sm:btn-md btn-neutral sm:w-40 mt-6" onClick={() => goTop()}>
              Read More
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col-reverse md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ spring, delay: 0.3 }}
          onHoverStart={() => setIsHoveredEdu(true)}
          onHoverEnd={() => setIsHoveredEdu(false)}
        >
          <motion.div className="flex flex-col justify-center">
            <h2 className="text-5xl font-bold">EDUCATION</h2>
            <Link to={"/education"} className="btn btn-sm sm:btn-md btn-neutral sm:w-40 mt-6" onClick={() => goTop()}>
              Read More
            </Link>
          </motion.div>
          <motion.div
            animate={isHoveredEdu ? { scale: 0.8 } : {}}
            className="w-1/2 h-[60%] bg-base-100 rounded-xl mb-20 md:mb-0 md:ml-20"
          >
            <Edu3DImage isHovered={isHoveredEdu} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Career;
