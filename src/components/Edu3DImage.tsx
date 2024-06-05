import { motion } from "framer-motion";
import EDUCATION from "../assets/image/education.png";

const Edu3DImage = ({ isHovered }: { isHovered: boolean }): JSX.Element => {
  return (
    <motion.img
      animate={isHovered ? { scale: 1.5, rotate: 0 } : {}}
      src={EDUCATION}
      className="w-[80%] relative top-[10$] md:top-[15%] xl:-top-[10%] left-[12%] z-10 opacity-1"
    />
  );
};

export default Edu3DImage;
