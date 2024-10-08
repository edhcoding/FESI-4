"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";

function ScrolLinked(): React.JSX.Element {
  const { scrollYProgress } = useScroll();

  const clipPath = useTransform(
    scrollYProgress,
    (scrollYProgress) => `circle(${scrollYProgress * 100}%)`
  );

  return (
    <div className="size-full bg-gray-900">
      <motion.div
        className="size-full bg-orange-400 fixed left-0 top-0"
        style={{ clipPath }}
      >
        {/* <h1></h1> */}
      </motion.div>
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="w-screen h-screen"></div>
      ))}
    </div>
  );
}

export default ScrolLinked;
