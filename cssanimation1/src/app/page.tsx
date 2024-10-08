"use client";

import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "@/components/MenuToggle";
import { Navigation } from "@/components/Navigation";

const variants = {
  open: {
    clipPath: "circle(2200px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

// clip-path at 앞에는 반지름의미, 뒤에는 x y 포지션의미

export default function Home() {
  // useCycle (useState와 비슷한 util 함수)
  const [isOpen, toggle] = useCycle(false, true);

  // 처음에는 닫힌 상태
  // motion.nav 리턴

  return (
    <>
      {/* React Spring */}
      {/* <CountingNumber /> */}
      {/* <Interval /> */}

      {/* Framer Motion */}
      {/* <FramerCountingNumber /> */}
      <motion.nav initial={"closed"} animate={isOpen ? "open" : "closed"}>
        <motion.div className="background" variants={variants} />
        <Navigation />
        <MenuToggle toggle={toggle} />
      </motion.nav>
    </>
  );
}
