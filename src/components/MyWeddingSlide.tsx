import MAIN_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_MAIN.png";
import PROFILESIDEBAR_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_PROFILESIDEBAR.png";
import LOGIN_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_LOGIN.png";
import SIGNUP_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_SIGNUP.png";
import USERPROFILE_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_USERPROFILE.png";
import BUSINESSITEM_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_BUSINESSITEM.png";
import REVIEW_PAGE from "../assets/image/project_screen/my_wedding/MYWEDDING_REVIEW.png";
import { useAtomValue } from "jotai";
import { tutorialAtom } from "../store/project";

const slides = [
  MAIN_PAGE,
  PROFILESIDEBAR_PAGE,
  LOGIN_PAGE,
  SIGNUP_PAGE,
  USERPROFILE_PAGE,
  BUSINESSITEM_PAGE,
  REVIEW_PAGE,
];

const MyWeddingSlide = (): JSX.Element => {
  const tutorialIdx = useAtomValue(tutorialAtom);

  return (
    <>
      <ol className="size-full overflow-x-hidden">
        {slides.map((imgSrc, idx) => {
          let slideClass = "";
          if (idx === tutorialIdx) slideClass = "z-10";

          return (
            <li key={`myWedding_${idx}`} id={`myWedding_${idx}`} className={`size-full absolute ${slideClass}`}>
              <img src={imgSrc} className={`w-full h-[calc(40vw-3.25rem)]`}></img>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default MyWeddingSlide;
