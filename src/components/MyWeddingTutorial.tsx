import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { tutorialAtom } from "../store/project";

const MyWeddingTutorial = (): JSX.Element => {
  const [tutorialIdx, setTutorialIdx] = useAtom(tutorialAtom);

  return (
    <>
      {tutorialIdx === 0 && (
        <div
          id="wedding_tutorial_0"
          className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[15%] pad:top-[12%]"
        >
          <div
            className="w-[8%] h-max relative left-[81%] z-50 cursor-pointer"
            onClick={() => setTutorialIdx((prev) => prev + 1)}
          >
            <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1, delay: 0.3 }}
            className="w-max md:text-xs pad:text-base relative left-1/4 z-50"
          >
            깜박이는 곳을 눌러 눌러 유저 사이드바를 열어보세요!
          </motion.div>
        </div>
      )}
      {tutorialIdx === 1 && (
        <div
          id="wedding_tutorial_1"
          className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[12%]"
        >
          <div
            className="w-[10%] h-max relative top-4 left-[83%] z-50 cursor-pointer"
            onClick={() => setTutorialIdx((prev) => prev + 1)}
          >
            <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
          </div>
          <motion.div
            initial={{ y: 30, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="w-max md:text-xs pad:text-base text-black relative bottom-[5%] left-1/4 z-50"
          >
            깜박이는 곳을 눌러 로그인 페이지로 이동해보세요!
          </motion.div>
        </div>
      )}
      {tutorialIdx === 2 && (
        <div
          id="wedding_tutorial_2"
          className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[12%]"
        >
          <div
            className="w-[10%] h-fit relative top-[75%] left-[37%] z-50 cursor-pointer"
            onClick={() => setTutorialIdx((prev) => prev + 1)}
          >
            <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
          </div>
          <motion.div
            initial={{ y: 30, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="w-max md:text-xs pad:text-base relative bottom-2 left-5 z-50"
          >
            계정이 없다면 회원가입 페이지에서 가입할 수 있어요!
            <br />
            회원가입 페이지로 이동해볼까요?
          </motion.div>
        </div>
      )}
      {tutorialIdx === 3 && (
        <div
          id="wedding_tutorial_3"
          className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[14%]"
        >
          <div
            className="w-[10%] h-max relative top-[70%] left-[45%] z-50 cursor-pointer"
            onClick={() => setTutorialIdx((prev) => prev + 1)}
          >
            <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
          </div>
          <motion.div
            initial={{ y: 30, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="w-max md:text-xs pad:text-base relative bottom-8 left-5 z-50"
          >
            해당 페이지에서 간단한 정보를 입력하고 회원가입을 할 수 있어요!
          </motion.div>
        </div>
      )}
      {tutorialIdx === 4 && (
        <div
          id="wedding_tutorial_4"
          className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[12%]"
        >
          <div
            className="w-[10%] h-max relative top-[68%] left-[20%] z-50 cursor-pointer"
            onClick={() => setTutorialIdx((prev) => prev + 1)}
          >
            <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
          </div>
          <motion.div
            initial={{ y: 30, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="w-max md:text-xs pad:text-base relative bottom-8 left-[20%] z-50"
          >
            가입 후에 유저프로필에서 위시리스트와 내가 작성한 리뷰를 확인할 수 있어요!
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.3 }}
            className="w-max md:text-xs pad:text-base relative top-[20%] left-[5%] z-50"
          >
            서비스를 제공하는 사업자 페이지로 이동해볼까요?
          </motion.div>
        </div>
      )}
      {tutorialIdx === 5 && (
        <div
          id="wedding_tutorial_5"
          className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[12%]"
        >
          <div
            className="w-[10%] h-max relative top-[85%] left-[10%] z-50 cursor-pointer"
            onClick={() => setTutorialIdx((prev) => prev + 1)}
          >
            <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
          </div>
          <motion.div
            initial={{ y: 30, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="w-max text-[0.5rem] md:text-xs pad:text-base relative bottom-6 left-[20%] z-50"
          >
            이곳에서 서비스를 제공하는 업체의 자세한 정보들을 얻을 수 있습니다
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.3 }}
            className="w-max md:text-xs pad:text-base relative top-[45%] left-[5%] z-50"
          >
            리뷰도 작성하고 조회할 수 있어요!
          </motion.div>
        </div>
      )}
      {tutorialIdx === 6 && (
        <div
          id="wedding_tutorial_6"
          className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[12%]"
        >
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg relative top-[35%] left-[38%] z-50">
            배포 사이트 보러가기
          </button>
          <div className="w-[30%] h-max relative bottom-[5%] left-[34%] xl:left-[32%] z-40 cursor-pointer">
            <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
          </div>
        </div>
      )}
    </>
  );
};

export default MyWeddingTutorial;