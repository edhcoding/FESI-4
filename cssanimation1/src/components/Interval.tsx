import { useState, useEffect } from "react";
import { animated, config, useSpring } from "@react-spring/web";

function AnimatedNumberReactSpring({ value }: { value: number }) {
  const animatedValue = useSpring<{ val: number }>({
    val: value,
    // to: {                    ===     val: value 위에랑 똑같은 말임
    //   val: value,
    // },
    config: {
      ...config.stiff,
      clamp: true,
    },
  });
  return (
    <animated.span>
      {animatedValue.val.to((val: number) => Math.floor(val))}
    </animated.span>
  );
}

function Interval() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setNum(Math.random() * 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatedNumberReactSpring value={num} />
    </>
  );
}

export default Interval;
