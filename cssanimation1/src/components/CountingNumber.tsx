"use client";

import { animated, config, useSpring } from "@react-spring/web";

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
  const { displayValue } = useSpring({
    from: {
      displayValue: from,
    },
    to: {
      displayValue: to,
    },
    config: {
      duration: duration * 1000,
      // tension: 200,
      // friction: 20,
      ...config.stiff,
      clamp: true, // 오버 슈트를 방지 ex)300인데 301까지 올라갔다 내려오는 현상?
    },
  });

  return (
    <animated.span>
      {displayValue.to((value) => Math.round(value))}
    </animated.span>
  );
}
// useSpring에 콜백함수를 넣어주고 두번째 인자로 종속성 인자를 넣어주는 방법이있고 객체로 넣어주는 방법이있음

export default function CountingNumber() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        fontSize: "5rem",
      }}
    >
      <NumberRangeAnimation from={0} to={300} duration={1} />
      <NumberRangeAnimation from={100} to={1} duration={1} />
    </div>
  );
}
