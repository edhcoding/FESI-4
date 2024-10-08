"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";

const PACE_COUNT = 5;

function ScrolLinked(): React.JSX.Element {
  const { scrollYProgress } = useScroll();

  const clipPath = useTransform(
    scrollYProgress,
    (scrollYProgress) => `circle(${scrollYProgress * 100}%)`
  );

  const yPercent = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["100%", "100%", "0%"]
  );

  // 위에가 요약 이지만 아래는 useSpring까지 사용해서 더 동적이게 만들 수 있음
  // const y = useSpring(100, { bounce: 0 });
  // useTransform(scrollYProgress, (scrollYProgress) => {
  //   if (scrollYProgress > 0.7) {
  //     y.set(0);
  //   } else {
  //     y.set(100);
  //   }
  // });

  // const yPercent = useTransform(y, (y) => `${y}%`);

  return (
    <div className="size-full bg-gray-900">
      <motion.div
        className="size-full bg-orange-400 fixed left-0 top-0"
        style={{ clipPath }}
      >
        <h1 className="font-bold text-8xl pl-[8vw]">
          <span className="block overflow-hidden">
            <motion.span className="block" style={{ y: yPercent }}>
              Aha!
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block" style={{ y: yPercent }}>
              You found me!
            </motion.span>
          </span>
        </h1>
      </motion.div>
      {Array.from({ length: PACE_COUNT }, (_, i) => (
        <div key={i} className="w-screen h-screen"></div>
      ))}
    </div>
  );
}

export default ScrolLinked;
