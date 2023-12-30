"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import Image from "next/image";
import Arrow from "../../../public/arrow.svg";

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex flex-col md:flex-row gap-4 items-center"
    >
      <Image
        src={imgUrl}
        alt={title}
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="lg:flex hidden items-center justify-center min-w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <Image
          src={Arrow}
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </motion.div>
  );
};

export default InsightCard;
