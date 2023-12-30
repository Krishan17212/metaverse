"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8 relative flex items-center justify-center`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01 left-0 top-0" />
    <div className="nav_inner font-bold text-[34px] leading-normal text-white uppercase relative">
      Metaversus
    </div>
  </motion.nav>
);

export default Navbar;
