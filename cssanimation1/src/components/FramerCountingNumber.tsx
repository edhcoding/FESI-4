import React, { useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface NumberRangeAnimationProps {
  from: number;
  to: number;
  duration?: number;
}

function NumberRangeAnimation({
  from,
  to,
  duration = 2,
}: NumberRangeAnimationProps) {
  // const motionValue = useMotionValue(from);
  // 1. useMotionValue: 명시적으로 생성
  // 2. 다른 훅이나 컴포넌트 사용시 암시적으로 생성해서 사용하게 됩니다.
  const motionValue = useSpring(from, {
    duration: duration * 1000, // Convert to milliseconds
    bounce: 0, // React Spring에서 clamp랑 같음
  });

  // const displayValue = useTransform(motionValue, (latest) =>
  //   Math.max(0, Math.round(latest))
  // );

  const displayValue = useTransform(() => {
    return Math.round(motionValue.get());
  });

  useEffect(() => {
    motionValue.set(to);
  }, [motionValue, to]);

  return <motion.span>{displayValue}</motion.span>;
}

function FramerCountingNumber() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        fontSize: "5rem",
      }}
    >
      <NumberRangeAnimation from={0} to={100} duration={3} />
      <NumberRangeAnimation from={100} to={0} duration={3} />
    </div>
  );
}

export default FramerCountingNumber;
