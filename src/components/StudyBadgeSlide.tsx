import STUDYBADGE_1 from "../assets/image/project_screen/study_badge/STUDYBADGE_1.png";
import STUDYBADGE_2 from "../assets/image/project_screen/study_badge/STUDYBADGE_2.png";
import STUDYBADGE_3 from "../assets/image/project_screen/study_badge/STUDYBADGE_3.png";
import STUDYBADGE_4 from "../assets/image/project_screen/study_badge/STUDYBADGE_4.png";
import STUDYBADGE_5 from "../assets/image/project_screen/study_badge/STUDYBADGE_5.png";
import STUDYBADGE_6 from "../assets/image/project_screen/study_badge/STUDYBADGE_6.png";
import STUDYBADGE_7 from "../assets/image/project_screen/study_badge/STUDYBADGE_7.png";
import STUDYBADGE_8 from "../assets/image/project_screen/study_badge/STUDYBADGE_8.png";
import STUDYBADGE_9 from "../assets/image/project_screen/study_badge/STUDYBADGE_9.png";
import STUDYBADGE_10 from "../assets/image/project_screen/study_badge/STUDYBADGE_10.png";
import STUDYBADGE_11 from "../assets/image/project_screen/study_badge/STUDYBADGE_11.png";
import STUDYBADGE_12 from "../assets/image/project_screen/study_badge/STUDYBADGE_12.png";
import STUDYBADGE_13 from "../assets/image/project_screen/study_badge/STUDYBADGE_13.png";
import STUDYBADGE_14 from "../assets/image/project_screen/study_badge/STUDYBADGE_14.png";
import STUDYBADGE_15 from "../assets/image/project_screen/study_badge/STUDYBADGE_15.png";
import STUDYBADGE_16 from "../assets/image/project_screen/study_badge/STUDYBADGE_16.png";

import MOBILE_1 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_1.png";
import MOBILE_2 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_2.png";
import MOBILE_3 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_3.png";
import MOBILE_4 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_4.png";
import MOBILE_5 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_5.png";
import MOBILE_6 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_6.png";
import MOBILE_7 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_7.png";
import MOBILE_8 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_8.png";
import MOBILE_9 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_9.png";
import MOBILE_10 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_10.png";
import MOBILE_11 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_11.png";
import MOBILE_12 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_12.png";
import MOBILE_13 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_13.png";
import MOBILE_14 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_14.png";
import MOBILE_15 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_15.png";
import MOBILE_16 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_16.png";
import MOBILE_17 from "../assets/image/project_screen/study_badge/STUDYBADGE_MOBILE_17.png";
import { useAtomValue } from "jotai";
import { tutorialAtom } from "../store/project";

const StudyBadgeSlide = ({ isMobile }: { isMobile: boolean }): JSX.Element => {
  const tutorialIdx = useAtomValue(tutorialAtom);

  const slides = isMobile
    ? [
        MOBILE_1,
        MOBILE_2,
        MOBILE_3,
        MOBILE_4,
        MOBILE_5,
        MOBILE_6,
        MOBILE_7,
        MOBILE_8,
        MOBILE_9,
        MOBILE_10,
        MOBILE_11,
        MOBILE_12,
        MOBILE_13,
        MOBILE_14,
        MOBILE_15,
        MOBILE_16,
        MOBILE_17,
      ]
    : [
        STUDYBADGE_1,
        STUDYBADGE_2,
        STUDYBADGE_3,
        STUDYBADGE_4,
        STUDYBADGE_5,
        STUDYBADGE_6,
        STUDYBADGE_7,
        STUDYBADGE_8,
        STUDYBADGE_9,
        STUDYBADGE_10,
        STUDYBADGE_11,
        STUDYBADGE_12,
        STUDYBADGE_13,
        STUDYBADGE_14,
        STUDYBADGE_15,
        STUDYBADGE_16,
      ];

  return (
    <>
      <ol className="size-full overflow-hidden">
        {slides.map((imgSrc, idx) => {
          let slideClass = "";
          if (idx === tutorialIdx) slideClass = "z-10";

          if (!isMobile) {
            return (
              <li key={`studyBadge_${idx}`} id={`studyBadge_${idx}`} className={`size-full absolute ${slideClass}`}>
                <img src={imgSrc} className={`w-full h-[calc(40vw-3.25rem)]`}></img>
              </li>
            );
          } else {
            return (
              <li
                key={`studyBadge_${idx}`}
                id={`studyBadge_${idx}`}
                className={`w-full h-[calc(153vw-1.75rem)] absolute ${slideClass}`}
              >
                <img src={imgSrc} className={`w-[calc(100%-1.2rem)] h-full rounded-[2.5rem]`}></img>
              </li>
            );
          }
        })}
      </ol>
    </>
  );
};

export default StudyBadgeSlide;
