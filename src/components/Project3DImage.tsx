import { motion } from "framer-motion";
import PHONE_MOCKUP from "../assets/image/react-shop-mockup.png";
import PC_MOCKUP from "../assets/image/my-wedding-mockup.png";
import PAD_MOCKUP from "../assets/image/team-mockup.png";

const Project3DImage = ({ isHovered }: { isHovered: boolean }): JSX.Element => {
  return (
    <>
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={isHovered ? { opacity: 1, scale: 1.5, rotate: -30 } : {}}
        style={{ x: "-5vw", y: "-10vh" }}
        transition={{ delay: 0.1 }}
        src={PHONE_MOCKUP}
        className="w-[28%] absolute top-[20%] left-[25%] md:top-[15%] z-10"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={isHovered ? { opacity: 1, scale: 1.5, rotate: 30 } : {}}
        style={{ x: "5vw", y: "-10vh" }}
        transition={{ delay: 0.1 }}
        src={PC_MOCKUP}
        className="w-[55%] absolute top-[20%] left-[25%] md:top-[15%]"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={isHovered ? { opacity: 1, scale: 1.5, rotate: 0, y: "calc(20vh)" } : {}}
        style={{ y: "20vh" }}
        transition={{ delay: 0.1 }}
        src={PAD_MOCKUP}
        className="w-[80%] absolute top-[10%] left-[20%] md:top-[30%]"
      />
    </>
  );
};

export default Project3DImage;
