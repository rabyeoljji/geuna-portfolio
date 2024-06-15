import MAIN_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_MAIN.png";
import PROFILESIDEBAR_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_PROFILESIDEBAR.png";
import LOGIN_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_LOGIN.png";
import SIGNUP_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_SIGNUP.png";
import USERPROFILE_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_USERPROFILE.png";
import BUSINESSITEM_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_BUSINESSITEM.png";
import REVIEW_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_REVIEW.png";
import MOBILE_MAIN from "../assets/image/project_screen/my_wedding/MYWEDDING_MOBILE_MAIN.png";
import MOBILE_PROFILESIDEBAR from "../assets/image/project_screen/my_wedding/MYWEDDING_MOBILE_PROFILESIDEBAR.png";
import MOBILE_LOGIN from "../assets/image/project_screen/my_wedding/MYWEDDING_MOBILE_LOGIN.png";
import MOBILE_SIGNUP from "../assets/image/project_screen/my_wedding/MYWEDDING_MOBILE_SIGNUP.png";
import MOBILE_USERPROFILE from "../assets/image/project_screen/my_wedding/MYWEDDING_MOBILE_USERPROFILE.png";
import MOBILE_BUSINESSITEM1 from "../assets/image/project_screen/my_wedding/MYWEDDING_MOBILE_BUSINESSITEM1.png";
import MOBILE_BUSINESSITEM2 from "../assets/image/project_screen/my_wedding/MYWEDDING_MOBILE_BUSINESSITEM2.png";
import MOBILE_REVIEW from "../assets/image/project_screen/my_wedding/MYWEDDING_MOBILE_REVIEW.png";
import { useAtomValue } from "jotai";
import { tutorialAtom } from "../store/project";

const MyWeddingSlide = ({ isMobile }: { isMobile: boolean }): JSX.Element => {
  const tutorialIdx = useAtomValue(tutorialAtom);

  const slides = isMobile
    ? [
        MOBILE_MAIN,
        MOBILE_PROFILESIDEBAR,
        MOBILE_LOGIN,
        MOBILE_SIGNUP,
        MOBILE_USERPROFILE,
        MOBILE_BUSINESSITEM1,
        MOBILE_BUSINESSITEM2,
        MOBILE_REVIEW,
      ]
    : [MAIN_PAGE, PROFILESIDEBAR_PAGE, LOGIN_PAGE, SIGNUP_PAGE, USERPROFILE_PAGE, BUSINESSITEM_PAGE, REVIEW_PAGE];

  return (
    <>
      <ol className="size-full overflow-hidden">
        {slides.map((imgSrc, idx) => {
          let slideClass = "";
          if (idx === tutorialIdx) slideClass = "z-10";

          if (!isMobile) {
            return (
              <li key={`myWedding_${idx}`} id={`myWedding_${idx}`} className={`size-full absolute ${slideClass}`}>
                <img src={imgSrc} className={`w-full h-[calc(40vw-3.25rem)]`}></img>
              </li>
            );
          } else {
            return (
              <li
                key={`myWedding_${idx}`}
                id={`myWedding_${idx}`}
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

export default MyWeddingSlide;
