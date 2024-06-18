import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { tutorialAtom } from "../store/project";

const ReactShopTutorial = ({ isMobile }: { isMobile: boolean }): JSX.Element => {
  const [tutorialIdx, setTutorialIdx] = useAtom(tutorialAtom);

  if (!isMobile) {
    return (
      <>
        {tutorialIdx === 0 && (
          <div
            id="reactShop_tutorial_0"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[15%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[8%] h-max relative bottom-[6%] left-[80%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max md:text-xs pad:text-base relative bottom-[12%] left-1/3 z-50"
            >
              깜박이는 곳을 눌러 검색기능을 활성화해보세요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 1 && (
          <div
            id="reactShop_tutorial_1"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-3 left-[78%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-200"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max md:text-xs pad:text-base text-white relative bottom-[10%] left-[40%] z-50"
            >
              깜박이는 곳을 눌러 제품 페이지로 이동해보세요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 2 && (
          <div
            id="reactShop_tutorial_2"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-fit relative top-[59%] left-[23%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-200"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max md:text-xs pad:text-base relative top-[40%] left-1/2 z-50"
            >
              제품이 마음에 든다면, 장바구니에 담기 버튼을 클릭해
              <br />
              제품을 장바구니에 담을 수 있어요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 3 && (
          <div
            id="reactShop_tutorial_3"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[59%] left-[33%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-200"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max md:text-xs pad:text-base relative top-[45%] left-[50%] z-50"
            >
              장바구니를 확인하러 가볼까요?
            </motion.div>
          </div>
        )}
        {tutorialIdx === 4 && (
          <div
            id="reactShop_tutorial_4"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[64%] left-[61%] z-[51] cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-200"></span>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max md:text-xs pad:text-base relative bottom-8 left-[40%] z-50"
            >
              여기 우리가 담은 제품이 있네요!
              <br />
              깜박이는 곳을 눌러 같은 제품을 하나 더 담아볼까요?
            </motion.div>
            <div className="w-[35%] h-[60%] relative left-[37%] border-solid border-2 border-white z-50 rounded-xl"></div>
          </div>
        )}
        {tutorialIdx === 5 && (
          <div
            id="reactShop_tutorial_5"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative bottom-[8%] left-[7.5%] z-[51] cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-200"></span>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max md:text-xs pad:text-base relative top-[62%] left-[40%] z-50"
            >
              여기에서 수량이 변경된 것을 확인할 수 있어요!
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max md:text-xs pad:text-base relative bottom-[15%] left-[20%] z-50"
            >
              특정 카테고리 페이지로 이동할 수도 있습니다.
              <br />
              깜박이는 곳을 클릭해보세요!
            </motion.div>
            <div className="w-[10%] h-[16%] relative top-[26%] left-[58%] xl:top-[29%] border-solid border-2 border-white z-50 rounded-xl"></div>
          </div>
        )}
        {tutorialIdx === 6 && (
          <div
            id="reactShop_tutorial_6"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative bottom-[10%] left-[68%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-200"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max text-[0.5rem] md:text-xs pad:text-base relative bottom-[10%] left-[25%] z-50"
            >
              이곳에서 제품들을 카테고리 별로 조회할 수 있습니다.
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max md:text-xs pad:text-base relative bottom-[28%] left-[38%] z-50"
            >
              여기 아이콘을 클릭하면 테마도 변경이 가능해요!
            </motion.div>
          </div>
        )}
        {(tutorialIdx === 7 || tutorialIdx === 8) && (
          <div
            id="reactShop_tutorial_7"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <a
              href="https://react-shop-geunana.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg relative top-[35%] left-[38%] z-50"
            >
              배포 사이트 보러가기
            </a>
            <div className="w-[30%] h-max relative bottom-[5%] left-[35%] xl:left-[32%] z-40 cursor-pointer">
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        {tutorialIdx === 0 && (
          <div id="reactShop_tutorial_0" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[40%] h-max relative top-[60%] left-[28%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[16%] left-[26%] z-50"
            >
              깜박이는 곳을 눌러
              <br />
              제품 페이지로 이동해보세요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 1 && (
          <div id="reactShop_tutorial_1" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[70%] left-[70%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[40%] left-[10%] z-50"
            >
              아래쪽으로 이동해볼까요?
              <br />
              깜박이는 곳을 클릭해 스크롤 해보세요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 2 && (
          <div id="reactShop_tutorial_2" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[30%] h-max relative top-[66%] left-[10%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-700"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[30%] left-[25%] z-50"
            >
              제품이 마음에 든다면,
              <br />
              장바구니에 담기 버튼을 클릭해
              <br />
              제품을 장바구니에 담을 수 있어요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 3 && (
          <div id="reactShop_tutorial_3" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[30%] h-max relative top-[66%] left-[48%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[35%] left-[5%] z-50"
            >
              제품이 잘 담겼는지 확인하러 가 볼까요?
            </motion.div>
          </div>
        )}
        {tutorialIdx === 4 && (
          <div id="reactShop_tutorial_4" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[30%] h-max relative top-[67%] left-[25%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-700"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[20%] left-[12%] z-50"
            >
              여기 우리가 담은 제품이 있네요!
              <br />
              깜박이는 곳을 클릭하면
              <br />
              같은 제품을 하나 더 담을 수 있답니다.
            </motion.div>
          </div>
        )}
        {tutorialIdx === 5 && (
          <div id="reactShop_tutorial_5" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[4%] right-[5%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[48%] left-[6%] z-50"
            >
              여기에서 수량이 변경된 것을 확인할 수 있어요!
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-0 left-[2%] z-50"
            >
              특정 카테고리 페이지로 이동할 수도 있습니다.
              <br />
              깜박이는 곳을 클릭해보세요!
            </motion.div>
            <div className="w-[40%] h-[10%] relative top-[41.5%] left-[8%] border-solid border-2 border-indigo-500 z-50 rounded-xl"></div>
          </div>
        )}
        {tutorialIdx === 6 && (
          <div id="reactShop_tutorial_6" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[11%] left-[5%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[15%] left-[12%] z-50"
            >
              이렇게 메뉴를 열어
              <br />
              카테고리를 선택할 수 있습니다.
              <br />
              액세서리 카테고리로 이동해볼까요?
            </motion.div>
          </div>
        )}
        {tutorialIdx === 7 && (
          <div id="reactShop_tutorial_7" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[4%] left-[55%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[15%] left-[15%] z-50"
            >
              이곳에서 제품들을
              <br />
              카테고리 별로 조회할 수 있습니다.
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative bottom-[8%] left-[2%] z-50"
            >
              이 아이콘을 눌러 테마를 변경할 수도 있어요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 8 && (
          <div id="reactShop_tutorial_8" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <a
              href="https://react-shop-geunana.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm md:btn-md lg:btn-lg border-solid border-2 border-gray-300 relative top-[45%] left-[25%] z-50"
            >
              배포 사이트 보러가기
            </a>
            <div className="w-[40%] h-max relative top-[32%] left-[32%] z-40 cursor-pointer">
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default ReactShopTutorial;
