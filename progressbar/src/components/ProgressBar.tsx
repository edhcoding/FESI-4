import React, { useState, useEffect } from "react";

const ProgressBar = ({ percentage }: { percentage: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // 애니메이션 효과를 위해 setTimeout 사용
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 300);

    // 컴포넌트가 언마운트되면 타이머 정리
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
