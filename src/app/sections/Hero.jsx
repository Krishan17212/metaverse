"use client";

import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
  stampAnim,
} from "../utils/motion";
import styles from "../styles";
import Image from "next/image";
import cover from "../../../public/cover.png";
import stamp from "../../../public/stamp.png";

const Hero = () => {
  return (
    <section className={`${styles.yPaddings}`}>
      <motion.div
        className={`container flex flex-col`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div
          className={`flex justify-center items-center flex-col relative z-10`}
        >
          <motion.h1
            variants={textVariant(1.1)}
            className={`${styles.heroHeading} tracking-tight`}
          >
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.3)}
            className={`flex flex-row justify-center items-center `}
          >
            <h1 className={`${styles.heroHeading}`}>Ma</h1>
            <div className={`${styles.heroDText}`}></div>
            <h1 className={`${styles.heroHeading}`}>Ness</h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[20px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <Image
            src={cover}
            alt="cover"
            className="w-full sm:h[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <motion.div
                variants={stampAnim(1)}
                initial="hidden"
                whileInView="show"
              >
                <Image
                  src={stamp}
                  alt="stamp"
                  className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
                />
              </motion.div>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
