"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { newFeatures } from "../constants";
import { NewFeatures } from "../components";
import { TitleText, TypingText } from "../components/CustomTexts";
import whatsNew from "../../../public/whats-new.png";
import Image from "next/image";

const WhatsNew = () => {
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
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.85] flex justify-center flex-col"
        >
          <TypingText title="| What's New" />
          <TitleText title={<>What's new about Metaversus?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="startup"
                variants={fadeIn("right", "tween", index / 4, 1)}
              >
                <NewFeatures {...feature} />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`${styles.flexCenter} flex-1`}
        >
          <Image
            src={whatsNew}
            alt="Whats New"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
