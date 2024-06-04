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

  return (
    <div className="w-screen bg-base-300 px-32 py-48 mt-40 flex justify-center items-center">
      <div className="w-[1149px]">
        <motion.div
          className="flex items-center mb-32"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ spring, delay: 0.5 }}
          onHoverStart={() => setIsHoveredProject(true)}
          onHoverEnd={() => setIsHoveredProject(false)}
        >
          <motion.div
            animate={isHoveredProject ? { scale: 0.8 } : {}}
            className="w-1/2 h-48 md:h-72 lg:h-96 bg-base-100 rounded-xl mr-20"
          >
            <img
              src={PROJECT_THUMBNAIL}
              className={`${isHoveredProject ? "hidden" : ""} object-cover h-full rounded-xl dark:opacity-60`}
            />
            <Project3DImage isHovered={isHoveredProject} />
          </motion.div>
          <motion.div className="flex flex-col justify-center">
            <span className="text-5xl font-bold">PROJECT</span>
            <Link to={"/project"} className="btn btn-sm sm:btn-md btn-neutral sm:w-40 mt-6">
              Read More
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ spring, delay: 0.5 }}
          onHoverStart={() => setIsHoveredEdu(true)}
          onHoverEnd={() => setIsHoveredEdu(false)}
        >
          <motion.div className="flex flex-col justify-center">
            <span className="text-5xl font-bold">EDUCATION</span>
            <Link to={"/education"} className="btn btn-sm sm:btn-md btn-neutral sm:w-40 mt-6">
              Read More
            </Link>
          </motion.div>
          <motion.div
            animate={isHoveredEdu ? { scale: 0.8 } : {}}
            className="w-1/2 h-48 md:h-72 lg:h-96 bg-base-100 rounded-xl ml-20"
          >
            <Edu3DImage isHovered={isHoveredEdu} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Career;
