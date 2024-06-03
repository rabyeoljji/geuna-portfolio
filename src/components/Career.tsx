import { motion } from "framer-motion";
import PORTFOLIO_THUMBNAIL from "../assets/image/Portfolio_Thumbnail.png";
import { spring } from "../animation/index_ani";
import { Link } from "react-router-dom";

const Career = (): JSX.Element => {
  return (
    <div className="w-screen bg-base-300 p-32 mt-20 flex justify-center items-center">
      <div className="w-[90%]">
        <div className="flex items-center mb-32">
          <motion.img
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ spring, delay: 0.5 }}
            src={PORTFOLIO_THUMBNAIL}
            className="w-1/2 h-96 bg-base-100 rounded-xl mr-20"
          />
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ spring, delay: 0.5 }}
            className="flex flex-col justify-center"
          >
            <span className="text-5xl font-bold">PROJECT</span>
            <Link to={"/project"} className="btn btn-sm sm:btn-md btn-neutral sm:w-40 mt-6">
              Read More
            </Link>
          </motion.div>
        </div>
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ spring, delay: 0.5 }}
            className="flex flex-col justify-center"
          >
            <span className="text-5xl font-bold">EDUCATION</span>
            <Link to={"/education"} className="btn btn-sm sm:btn-md btn-neutral sm:w-40 mt-6">
              Read More
            </Link>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ spring, delay: 0.5 }}
            src={PORTFOLIO_THUMBNAIL}
            className="w-1/2 h-96 bg-base-100 rounded-xl ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Career;
