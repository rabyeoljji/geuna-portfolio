import { motion } from "framer-motion";
import { spring } from "../animation/index_ani";

const Education = (): JSX.Element => {
  return (
    <div className="w-4/5 flex flex-col justify-center items-center">
      <header className="inline-block w-fit text-5xl text-center md:text-7xl font-extrabold mt-20 mb-80">
        <motion.h2
          initial={{ y: 100, opacity: 0.3 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ spring, duration: 0.5 }}
        >
          EDUCATION
        </motion.h2>
      </header>
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.1 }}
        className="w-full flex flex-col items-start px-20 mb-10 justify-self-start text-3xl md:text-5xl font-extrabold"
      >
        이화여자대학교 문헌정보학과 졸업
        <p className="text-xl font-normal mt-10">2016.02 ~ 2021.02</p>
      </motion.h3>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 1, delay: 0.3 }}
        className="w-full flex flex-col items-start px-20 mt-8 mb-40"
      >
        <p className="text-xl mb-2">&emsp;&emsp;- 사회과학대학 문헌정보학과 전공</p>
        <p className="text-xl">&emsp;&emsp;- 2018년 학과 대표직 수행</p>
      </motion.div>
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 1 }}
        className="w-full flex flex-col items-start px-20 mt-40 mb-10 justify-self-start text-3xl md:text-5xl font-extrabold"
      >
        데이터 관련 전공 강의 이수
      </motion.h3>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 1, delay: 0.2 }}
        className="w-full flex flex-col items-start px-20 mt-8 mb-20"
      >
        <p className="text-xl font-normal mb-10">2017.09 - 2017.12</p>
        <p className="text-xl mb-2">&emsp;&emsp;- 데이터베이스의 이해</p>
        <p className="text-xl">&emsp;&emsp;- 정보 자료 선택의 이해</p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 1, delay: 0.2 }}
        className="w-full flex flex-col items-start px-20 mt-8 mb-20"
      >
        <p className="text-xl font-normal mb-10">2018.03 - 2018.06</p>
        <p className="text-xl mb-2">&emsp;&emsp;- 정보 검색과 검색엔진</p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 1, delay: 0.2 }}
        className="w-full flex flex-col items-start px-20 mt-8 mb-20"
      >
        <p className="text-xl font-normal mb-10">2018.09 - 2018.12</p>
        <p className="text-xl mb-2">&emsp;&emsp;- 디지털 도서관</p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 1, delay: 0.2 }}
        className="w-full flex flex-col items-start px-20 mt-8 mb-40"
      >
        <p className="text-xl font-normal mb-10">2020.09 - 2020.12</p>
        <p className="text-xl mb-2">&emsp;&emsp;- 정보 자원 기술의 이해</p>
      </motion.div>
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 1 }}
        className="w-full flex flex-col items-start px-20 mt-40 mb-10 justify-self-start text-3xl md:text-5xl font-extrabold"
      >
        부트캠프 프론트엔드 과정 수료
        <p className="text-xl font-normal mt-10">2024.01 - 2024.07</p>
      </motion.h3>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 1, delay: 0.2 }}
        className="w-full flex flex-col items-start px-20 mt-8 mb-40"
      >
        <p className="text-xl mb-2">&emsp;&emsp;- 제로베이스 프론트엔드 스쿨 수료</p>
      </motion.div>
    </div>
  );
};

export default Education;
