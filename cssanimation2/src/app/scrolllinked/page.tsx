"use client";

import * as React from "react";
// import { useScroll, animated, useSpring } from "@react-spring/web";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import styles from "./styles.module.scss";

const PAGE_COUNT = 5;

function ScrollLinkedAnimationFramer() {
  const { scrollYProgress } = useScroll();
  const clipPath = useTransform(
    scrollYProgress,
    (scrollYProgress) => `circle(${scrollYProgress * 100}%)`
  );
  const y = useSpring(100, { bounce: 0 });
  useTransform(scrollYProgress, (scrollYProgress) => {
    if (scrollYProgress > 0.7) {
      y.set(0);
    } else {
      y.set(100);
    }
  });
  const yPercent = useTransform(y, (y) => `${y}%`);

  return (
    <div className="bg-[#171717] size-full overflow-y-scroll">
      <div className="size-full fixed inset-0 pointer-events-none z-0 *:pointer-events-none *:size-full *:fixed *:inset-0">
        <motion.div
          className="bg-orange-400 top-1/2 left-1/2 transform translate-[50%]"
          style={{
            clipPath,
          }}
        >
          <h1 className={styles.title}>
            <span>
              <motion.span style={{ y: yPercent }}>Aha!</motion.span>
            </span>
            <span>
              <motion.span style={{ y: yPercent }}>You found me!</motion.span>
            </span>
          </h1>
        </motion.div>
      </div>
      {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <div className="w-screen h-screen" key={index} />
      ))}
    </div>
  );
}

export default ScrollLinkedAnimationFramer;
