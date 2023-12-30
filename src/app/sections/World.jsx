"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components/CustomTexts";
import map from "../../../public/map.png";
import people1 from "../../../public/people-01.png";
import people2 from "../../../public/people-02.png";
import people3 from "../../../public/people-03.png";
import Image from "next/image";

const World = () => {
  return (
    <section className={`py-12 sm:py-16 relative z-10`}>
      <motion.div
        className={`container ${styles.flexCenter} flex-col gap-8`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex-w-full h-[550px]"
        >
          <Image src={map} alt="map" className="w-full h-full object-cover" />

          <motion.div
            variants={fadeIn("down", "tween", 0.3, 1)}
            className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]"
          >
            <Image src={people1} alt="People 1" />
          </motion.div>

          <motion.div
            variants={fadeIn("down", "tween", 0.3, 1)}
            className="absolute left-20 top-10 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]"
          >
            <Image src={people2} alt="People 2" />
          </motion.div>

          <motion.div
            variants={fadeIn("down", "tween", 0.3, 1)}
            className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]"
          >
            <Image src={people3} alt="People 3" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
