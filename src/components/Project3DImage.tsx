import { motion } from "framer-motion";
import PHONE_MOCKUP from "../assets/image/react-shop-mockup.png";
import PC_MOCKUP from "../assets/image/my-wedding-mockup.png";
import PAD_MOCKUP from "../assets/image/team-mockup.png";
import STUDY_BADGE_PAD from "../assets/image/study-badge-pad.png";

const Project3DImage = ({ isHovered }: { isHovered: boolean }): JSX.Element => {
  return (
    <>
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={isHovered ? { opacity: 1, scale: 1.5, rotate: -30 } : {}}
        style={{ x: "-6vw", y: "-7vh" }}
        transition={{ delay: 0.1 }}
        src={PHONE_MOCKUP}
        className="w-[28%] absolute top-[10%] left-[22%] md:top-[18%]"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={isHovered ? { opacity: 1, scale: 1.5, rotate: 30 } : {}}
        style={{ x: "5vw", y: "-10vh" }}
        transition={{ delay: 0.1 }}
        src={PC_MOCKUP}
        className="w-[55%] absolute top-[20%] left-[25%] md:top-[15%] z-10"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={isHovered ? { opacity: 1, scale: 1.5, rotate: 50 } : {}}
        style={{ x: "7vw", y: "20vh" }}
        transition={{ delay: 0.1 }}
        src={PAD_MOCKUP}
        className="w-[30%] md:w-[35%] absolute top-[-20%] left-[25%] md:top-[15%] z-20"
      />
      {/* <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isHovered ? { opacity: 1, scale: 1.5, rotate: 0 } : {}}
        style={{}}
        transition={{ delay: 0.1 }}
        className="absolute w-[80%] left-[20%] top-[10%] md:top-[130%] z-0"
      >
        <img src={PAD_MOCKUP} className="" />
        <img
          src={STUDY_BADGE_PAD}
          className="absolute w-[21%] scale-y-125 rotate-[62deg] -skew-y-[38deg] top-[18%] left-[40%]"
        />
      </motion.div> */}
    </>
  );
};

export default Project3DImage;
