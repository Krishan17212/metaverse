"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components/CustomTexts";
import Image from "next/image";
import { InsightCard } from "../components";
import { insights } from "../constants";

const Insights = () => {
  return (
    <section className={`py-12 sm:py-16 relative z-10`}>
      <motion.div
        className={`container ${styles.flexCenter} flex-col gap-8`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="Insights" textStyles="text-center" />
        <TitleText title="Insight about metaverse" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => (
            <div className="" key={index}>
              <InsightCard {...insight} index={index + 1} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
