import PICKTOSS_DESKTOP from "../assets/image/project_screen/picktoss/PICKTOSS_DESKTOP.png";
import PICKTOSS_MOBILE from "../assets/image/project_screen/picktoss/PICKTOSS_MOBILE.png";

const PicktossSlide = ({ isMobile }: { isMobile: boolean }): JSX.Element => {

  return (
    <>
      <ol className="size-full overflow-hidden">
        {
          !isMobile ? (
            <li key={`picktoss_desktop`} id={`picktoss_desktop`} className={`size-full absolute`}>
            <img src={PICKTOSS_DESKTOP} className={`w-full h-[calc(40vw-3.25rem)]`}></img>
          </li>
          ) : (
            <li
            key={`picktoss_mobile`}
            id={`picktoss_mobile`}
            className={`w-full h-[calc(153vw-1.75rem)] absolute`}
          >
            <img src={PICKTOSS_MOBILE} className={`w-[calc(100%-1.2rem)] h-full rounded-[2.5rem]`}></img>
          </li>
          )
        }
      </ol>
    </>
  );
};

export default PicktossSlide;
