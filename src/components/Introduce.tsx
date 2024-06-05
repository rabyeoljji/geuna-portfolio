import { motion } from "framer-motion";
import PORTFOLIO_THUMBNAIL from "../assets/image/Portfolio_Thumbnail.png";
import { spring } from "../animation/index_ani";
import { useState } from "react";

const Introduce = (): JSX.Element => {
  const [isHoveredNotion, setIsHoveredNotion] = useState(false);

  return (
    <>
      <header className="inline-block w-fit text-7xl font-extrabold mt-40">
        <motion.h1 initial={{ opacity: 0.3 }} animate={{ y: -100, opacity: 1 }} transition={{ spring, duration: 0.5 }}>
          FRONT-END DEVELOPER
        </motion.h1>
      </header>
      <div className="mb-40">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ spring, duration: 0.5, delay: 0.1 }}
          className="text-xl text-center"
        >
          프론트엔드 개발자 나근아입니다.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ spring, duration: 0.5, delay: 0.2 }}
          className="text-xl mb-24 text-center"
        >
          어떻게 개발해야 사람들이 편리하다고 느낄까를 고민합니다.
        </motion.p>
        <motion.div
          className="flex w-full justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="h-[30rem]"></div>
          <div className="divider divider-horizontal"></div>
          <div className="h-[30rem]"></div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", delay: 0.5, duration: 0.5 }}
        className="flex justify-center items-center"
      >
        <img src={PORTFOLIO_THUMBNAIL} className="w-4/5 border-2 border-solid rounded-lg" />
        <span
          className={`absolute loading loading-ring loading-lg w-48 text-white ${!isHoveredNotion ? "hidden" : ""}`}
        ></span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.5 }}
        className="flex flex-col justify-center items-center mt-10"
      >
        <p className="text-2xl text-gray-500">MY NOTION PORTFOLIO</p>
        <a
          className="btn btn-sm sm:btn-md btn-neutral sm:w-40 mt-6"
          onMouseOver={() => setIsHoveredNotion(() => true)}
          onMouseOut={() => setIsHoveredNotion(() => false)}
          href="https://na-s-note-page.notion.site/Hello-I-m-Developer-who-listens-carefully-3ca2c1b21e4d425e95b65b629bcd5c54?pvs=4"
          target="_blank"
          rel="noopener noreferrer"
        >
          노션 포트폴리오
        </a>
      </motion.div>
    </>
  );
};

export default Introduce;
