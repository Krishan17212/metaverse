"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Headset from "../../../public/headset.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="md:py-16 py-12 relative"
    >
      <div className="footer-gradient" />
      <div className="container flex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter the Metaverse
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-6 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
          >
            <Image
              src={Headset}
              alt="Headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white uppercase">
              enter metaverse
            </span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-bold text-[24px] text-white">Metaversus</h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2021 - 2022 Metaversus. All rights reserved.
            </p>
            <div className="flex gap-5">
              {socials.map((icon, index) => (
                <div className="" key={icon.name}>
                  <Image
                    src={icon.url}
                    alt={icon.name}
                    className="w-[24px] h-[24px] object-contain ease-in-out duration-300 hover:scale-150"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
