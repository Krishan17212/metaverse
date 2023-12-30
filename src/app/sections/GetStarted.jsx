"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { StartSteps } from "../components";
import { TitleText, TypingText } from "../components/CustomTexts";
import { startingFeatures } from "../constants";
import Image from "next/image";
import getStartedImg from "../../../public/get-started.png";

const GetStarted = () => {
  return (
    <section className={`py-12 sm:py-16 relative z-10`}>
      <motion.div
        className={`container ${styles.flexCenter} flex-col lg:flex-row gap-8`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`${styles.flexCenter} flex-1`}
        >
          <Image
            src={getStartedImg}
            alt="GetStarted"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.85] flex justify-center flex-col"
        >
          <TypingText title="| How Metaversus Works" />
          <TitleText title={<>Get started with just a few clicks</>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                className="startup"
                variants={fadeIn("up", "tween", index / 4, 1)}
              >
                <StartSteps listNumber={index + 1} text={feature} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
