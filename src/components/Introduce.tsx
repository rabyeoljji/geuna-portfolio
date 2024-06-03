import { motion } from "framer-motion";
import PORTFOLIO_THUMBNAIL from "../assets/image/Portfolio_Thumbnail.png";
import { spring } from "../animation/index_ani";

const Introduce = (): JSX.Element => {
  return (
    <>
      <header className="inline-block w-fit text-7xl font-extrabold mt-28">
        <motion.h1 initial={{ opacity: 0.3 }} animate={{ y: -100, opacity: 1 }} transition={{ spring }}>
          FRONT-END DEVELOPER
        </motion.h1>
      </header>
      <motion.p
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ spring, delay: 0.1 }}
        className="text-xl mb-24"
      >
        프론트엔드 개발자 나근아입니다.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, rotateX: 180 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ spring, delay: 0.2, duration: 1 }}
        className="flex justify-center items-center"
      >
        <img src={PORTFOLIO_THUMBNAIL} className="w-4/5 border-2 border-solid rounded-lg" />
      </motion.div>
      <p className="text-2xl mt-10 text-gray-500">MY NOTION PORTFOLIO</p>
      <button className="btn btn-sm sm:btn-md btn-neutral sm:w-40 mt-6">노션 포트폴리오</button>
    </>
  );
};

export default Introduce;
