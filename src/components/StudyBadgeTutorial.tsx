import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { tutorialAtom } from "../store/project";

const StudyBadgeTutorial = ({ isMobile }: { isMobile: boolean }): JSX.Element => {
  const [tutorialIdx, setTutorialIdx] = useAtom(tutorialAtom);

  if (!isMobile) {
    return (
      <>
        {tutorialIdx === 0 && (
          <div
            id="studyBadge_tutorial_0"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[15%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[8%] h-max relative top-[2%] lg:top-[67%] left-[24%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max md:text-xs pad:text-base relative left-[15%] top-[30%] z-50"
            >
              원하는 스터디가 있나요? 스터디 모임을 생성해볼까요?
            </motion.div>
          </div>
        )}
        {tutorialIdx === 1 && (
          <div
            id="studyBadge_tutorial_1"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[80%] left-[45%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max md:text-xs pad:text-base relative bottom-[5%] left-1/4 z-50"
            >
              이곳에서 원하는 스터디의 정보를 입력하고 스터디 모임을 만들 수 있어요!
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max md:text-xs pad:text-base relative top-[50%] left-[60%] z-50"
            >
              입력창을 채웠다면 깜박이는 곳을 클릭해 스크롤을 내려볼게요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 2 && (
          <div
            id="studyBadge_tutorial_2"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-fit relative top-[77%] left-[54%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max md:text-xs pad:text-base relative bottom-2 left-[55%] top-[40%] z-50"
            >
              정보를 모두 입력했다면 스터디 생성 버튼을 눌러 생성할 수 있습니다.
              <br />
              버튼을 눌러볼까요?
            </motion.div>
          </div>
        )}
        {tutorialIdx === 3 && (
          <div
            id="studyBadge_tutorial_3"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[-4%] left-[57%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max md:text-xs pad:text-base relative bottom-8 left-[60%] top-0 z-50"
            >
              스터디 채널이 정상적으로 만들어졌네요!
              <br />
              확인 버튼을 클릭해 메인화면으로 이동해봅시다!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 4 && (
          <div
            id="studyBadge_tutorial_4"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[62%] left-[62%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max md:text-xs pad:text-base relative bottom-8 left-[75%] top-[30%] z-50"
            >
              여기 우리가 만든 스터디 채널이 있네요!
              <br />
              클릭해서 상세 정보를 확인해볼게요
            </motion.div>
          </div>
        )}
        {tutorialIdx === 5 && (
          <div
            id="studyBadge_tutorial_5"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[15%] left-[53%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max text-[0.5rem] md:text-xs pad:text-base relative bottom-6 top-[-15%] left-[35%] z-50"
            >
              이곳이 우리 스터디 채널의 메인 화면이랍니다!
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max md:text-xs pad:text-base relative top-[-10%] left-[65%] z-50"
            >
              모집 탭을 클릭해 신청한 사람이 있는지 볼까요?
            </motion.div>
          </div>
        )}
        {tutorialIdx === 6 && (
          <div
            id="studyBadge_tutorial_6"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[39%] left-[58%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max text-[0.5rem] md:text-xs pad:text-base relative bottom-6 top-[15%] left-[55%] z-50"
            >
              이곳에서 우리 스터디에 신청한 사람들을 확인할 수 있어요!
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max md:text-xs pad:text-base relative top-[20%] left-[70%] z-50"
            >
              이 분을 수락해볼게요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 7 && (
          <div
            id="studyBadge_tutorial_7"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[8%] left-[40%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max text-[0.5rem] md:text-xs pad:text-base relative bottom-6 top-[14%] left-[48%] z-50"
            >
              해당 신청자가 스터디 멤버로 수락됐어요!
              <br />
              멤버 리스트로 가서 확인해볼까요?
            </motion.div>
          </div>
        )}
        {tutorialIdx === 8 && (
          <div
            id="studyBadge_tutorial_8"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[8%] left-[33%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max text-[0.5rem] md:text-xs pad:text-base relative bottom-6 top-[8%] left-[58%] z-50"
            >
              여기 우리가 수락한 멤버가 있네요!
              <br />
              멤버가 모였으니 스터디 일정을 등록해볼게요.
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max md:text-xs pad:text-base relative top-0 left-[20%] z-50"
            >
              일정 탭을 클릭해보세요!
            </motion.div>
            <div className="w-[14%] h-[45%] relative top-[2%] left-[43%] border-solid border-2 border-gray-500 z-50 rounded-xl"></div>
          </div>
        )}
        {tutorialIdx === 9 && (
          <div
            id="studyBadge_tutorial_9"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[74%] left-[64%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max text-[0.5rem] md:text-xs pad:text-base relative bottom-6 top-[25%] left-[50%] z-50"
            >
              이곳에서 스터디 일정을 등록할 수 있답니다!
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max md:text-xs pad:text-base relative top-[40%] left-[58%] z-50"
            >
              일정 등록 버튼을 클릭해 일정을 생성해보세요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 10 && (
          <div
            id="studyBadge_tutorial_10"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[80%] left-[50%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max text-[0.5rem] md:text-xs pad:text-base relative bottom-6 top-[15%] left-[63%] z-50"
            >
              일정 이름, 메모 등을 적고
              <br />
              시작/종료 시간을 선택할 수 있어요!
              <br />
              반복 일정일 경우 반복 주기와 종료 날짜 등을
              <br />
              선택할 수가 있답니다.
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max md:text-xs pad:text-base relative top-[20%] left-[63%] z-50"
            >
              오프라인 스터디 모임의 경우
              <br />
              어떤 카페에서 모일 지
              <br />
              지도에서 선택할 수도 있어요!
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.5 }}
              className="w-max md:text-xs pad:text-base relative top-[27%] left-[63%] z-50"
            >
              모두 입력했다면 저장 버튼을 눌러
              <br />
              일정을 저장해볼게요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 11 && (
          <div
            id="studyBadge_tutorial_11"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[41%] left-[42%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
          </div>
        )}
        {tutorialIdx === 12 && (
          <div
            id="studyBadge_tutorial_12"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[60%] left-[55%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max text-[0.5rem] md:text-xs pad:text-base relative bottom-6 top-[10%] left-[20%] z-50"
            >
              일정 페이지에서 방금 작성한 일정이
              <br />
              생성된 것을 확인할 수 있습니다.
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max md:text-xs pad:text-base relative top-[40%] left-[68%] z-50"
            >
              이번에는 오늘 스터디 일정에 대해
              <br />
              출석체크를 해볼까요?
            </motion.div>
          </div>
        )}
        {tutorialIdx === 13 && (
          <div
            id="studyBadge_tutorial_13"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[58%] left-[51%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max md:text-xs pad:text-base relative top-[10%] left-[60%] z-50"
            >
              오늘 일정에 출석한 멤버를 클릭해보세요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 14 && (
          <div
            id="studyBadge_tutorial_14"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <div
              className="w-[10%] h-max relative top-[70%] left-[55%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max md:text-xs pad:text-base relative top-[10%] left-[60%] z-50"
            >
              출석한 멤버를 모두 체크한 후,
              <br />
              체크완료 버튼을 클릭하면 출석 체크 완료!
            </motion.div>
          </div>
        )}
        {tutorialIdx >= 15 && (
          <div
            id="studyBadge_tutorial_15"
            className="w-full h-[calc(40vw-3.25rem)] absolute right-0 md:top-[16%] pad:top-[13%] lg:top-[12%]"
          >
            <a
              href="https://tenten-studybadge.notion.site/1f160e99934a414f896346f1f4f7d406?v=a3f716340b44407a984769df8645934d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg relative top-[35%] left-[40%] z-50"
            >
              시연 영상 보러가기
            </a>
            <div className="w-[30%] h-max relative bottom-[5%] left-[35%] xl:left-[33%] z-40">
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
          <div id="studyBadge_tutorial_0" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[74%] left-[38%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-white"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[30%] left-[10%] z-50"
            >
              원하는 스터디가 있나요?
              <br />
              스터디 모임을 생성해볼까요?
            </motion.div>
          </div>
        )}
        {tutorialIdx === 1 && (
          <div id="studyBadge_tutorial_1" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[90%] left-[38%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[20%] left-[5%] z-50"
            >
              이곳에서 원하는 스터디의 정보를 입력하고
              <br />
              스터디 모임을 만들 수 있어요!
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[57%] left-[25%] z-50"
            >
              입력창을 채웠다면 깜박이는 곳을
              <br />
              클릭해 스크롤을 내려볼게요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 2 && (
          <div id="studyBadge_tutorial_2" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[20%] h-max relative top-[73%] left-[74%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-white"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[45%] left-[25%] z-50"
            >
              정보를 모두 입력했다면 스터디 생성
              <br />
              버튼을 눌러 생성할 수 있습니다.
              <br />
              버튼을 눌러볼까요?
            </motion.div>
          </div>
        )}
        {tutorialIdx === 3 && (
          <div id="studyBadge_tutorial_3" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[40%] h-max relative top-[50%] left-[30%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[-5%] left-[12%] z-50"
            >
              여기 우리가 만든 스터디 채널이 있네요!
              <br />
              클릭해서 상세 정보를 확인해볼게요
            </motion.div>
          </div>
        )}
        {tutorialIdx === 4 && (
          <div id="studyBadge_tutorial_4" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[24%] left-[80%] z-50 cursor-pointer"
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
              이곳이 우리 스터디 채널의 메인 화면이랍니다!
              <br />
              모집 탭을 클릭해 신청한 사람이 있는지 볼까요?
            </motion.div>
          </div>
        )}
        {tutorialIdx === 5 && (
          <div id="studyBadge_tutorial_5" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[70%] left-[48%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-white"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[3%] left-[12%] z-50"
            >
              이곳에서 우리 스터디에 신청한
              <br />
              사람들을 확인할 수 있어요!
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[25%] left-[40%] z-50"
            >
              이 분을 수락해볼게요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 6 && (
          <div id="studyBadge_tutorial_6" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[24%] left-[38%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[22%] left-[10%] z-50"
            >
              해당 신청자가 스터디 멤버로 수락됐어요!
              <br />
              멤버 리스트로 가서 확인해볼까요?
            </motion.div>
          </div>
        )}
        {tutorialIdx === 7 && (
          <div id="studyBadge_tutorial_7" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[24%] left-[16%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[22%] left-[5%] z-50"
            >
              여기 우리가 수락한 멤버가 있네요!
              <br />
              멤버가 모였으니 스터디 일정을 등록해볼게요.
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[-5%] left-[40%] z-50"
            >
              일정 탭을 클릭해보세요!
            </motion.div>
            <div className="w-[70%] h-[50%] relative top-[21%] left-[14%] border-solid border-2 border-gray-500 z-50 rounded-xl"></div>
          </div>
        )}
        {tutorialIdx === 8 && (
          <div id="studyBadge_tutorial_8" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[90%] left-[38%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[5%] left-[5%] z-50"
            >
              이곳에서 스터디 일정을 등록할 수 있답니다!
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[50%] left-[10%] z-50"
            >
              깜박이는 곳을 클릭해 스크롤을 내려볼까요?
            </motion.div>
          </div>
        )}
        {tutorialIdx === 9 && (
          <div id="studyBadge_tutorial_9" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[65%] left-[75%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-white"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[40%] left-[5%] z-50"
            >
              일정 등록 버튼을 클릭해 일정을 생성해보세요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 10 && (
          <div id="studyBadge_tutorial_10" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[90%] left-[75%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[20%] left-[5%] z-50"
            >
              일정 이름, 메모 등을 적고
              <br />
              시작/종료 시간을 선택할 수 있어요!
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.5 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[55%] left-[48%] z-50"
            >
              깜박이는 곳을 클릭해
              <br />
              스크롤을 내려보세요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 11 && (
          <div id="studyBadge_tutorial_11" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[77%] left-[65%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-white"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[10%] left-[20%] z-50"
            >
              반복 일정일 경우
              <br />
              반복 주기와 종료 날짜 등을
              <br />
              선택할 수가 있답니다.
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[47%] left-0 z-50"
            >
              오프라인 스터디 모임의 경우
              <br />
              어떤 카페에서 모일 지
              <br />
              지도에서 선택할 수도 있어요!
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.5 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[55%] left-[20%] z-50"
            >
              이제 일정 저장 버튼을 눌러보세요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 12 && (
          <div id="studyBadge_tutorial_12" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[51%] left-[24%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-white"></span>
            </div>
          </div>
        )}
        {tutorialIdx === 13 && (
          <div id="studyBadge_tutorial_13" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[77%] left-[38%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-white"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[22%] left-[12%] z-50"
            >
              일정 페이지에서 방금 작성한 일정이
              <br />
              생성된 것을 확인할 수 있습니다.
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1, delay: 0.5 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[68%] left-[25%] z-50"
            >
              이번에는 오늘 스터디 일정에 대해
              <br />
              출석체크를 해볼까요?
            </motion.div>
          </div>
        )}
        {tutorialIdx === 14 && (
          <div id="studyBadge_tutorial_14" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[65%] left-[15%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[40%] left-[12%] z-50"
            >
              오늘 일정에 출석한 멤버를 클릭해보세요!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 15 && (
          <div id="studyBadge_tutorial_15" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div
              className="w-[25%] h-max relative top-[80%] left-[36%] z-50 cursor-pointer"
              onClick={() => setTutorialIdx((prev) => prev + 1)}
            >
              <span className="loading loading-ring loading-lg w-full text-white"></span>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="w-max p-2 bg-gray-300 rounded-lg text-xs text-black relative top-[40%] left-[8%] z-50"
            >
              출석한 멤버를 모두 체크한 후,
              <br />
              체크완료 버튼을 클릭하면 출석 체크 완료!
            </motion.div>
          </div>
        )}
        {tutorialIdx === 16 && (
          <div id="studyBadge_tutorial_16" className="w-[73vw] h-[calc(153vw-28px)] absolute top-2">
            <div className="w-[40%] h-max relative top-[42%] left-[32%] z-40 cursor-pointer">
              <span className="loading loading-ring loading-lg w-full text-gray-500"></span>
            </div>
            <a
              href="https://tenten-studybadge.notion.site/1f160e99934a414f896346f1f4f7d406?v=a3f716340b44407a984769df8645934d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn btn-sm md:btn-md pad:btn-lg w-fit flex justify-center items-center border-solid border-2 border-gray-300 relative top-[28%] left-[26%] z-50"
            >
              시연영상 보러가기
            </a>
          </div>
        )}
      </>
    );
  }
};

export default StudyBadgeTutorial;
