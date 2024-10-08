import { useEffect, useState } from "react";

interface DonutChartProps {
  percentage: number;
  radius: number;
  strokeWidth: number;
}

export default function DonutChart({
  percentage,
  radius,
  strokeWidth,
}: DonutChartProps) {
  const [realPercentage, setRealPercentage] = useState(0);

  const containerSize = radius * 2 + strokeWidth;
  // + strokeWidth를 하는 이유는 원에다가 stroke 속성을 부여하니까 strokeWidth만큼 내부 외부로 커짐
  // 따라서 cx, cy도 변경

  const circumference = 2 * Math.PI * radius;

  const offset: number = circumference - (realPercentage / 100) * circumference;
  // const offset: number = ((100 - realPercentage) / 100) * circumference;
  console.log("circumference: ", circumference); // 414.6902302738527
  console.log("offset: ", offset); // 처음: 414.6902302738527, 나중: 190.75750592597223

  useEffect(() => {
    const id = setTimeout(() => {
      setRealPercentage(percentage);
    }, 300);

    return () => clearTimeout(id);
  }, [percentage]);

  return (
    <svg
      width={containerSize}
      height={containerSize}
      viewBox={`0 0 ${containerSize} ${containerSize}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={containerSize / 2}
        cy={containerSize / 2}
        r={radius}
        fill={"transparent"}
        strokeWidth={strokeWidth}
        stroke={"white"}
      />
      {/* viewBox: svg 태그 내부의 좌표를 정의해준다 0 0 100 100이면 가로 0~100,
      세로 0~100의 좌표를 정의한 것이다. 
      cx: 원의 중심 x좌표 
      cy: 원의 중심 y좌표
      r: 원의 지름 px단위다 
      fill: 원 내부 stroke: 원의 경계선 색 
      stroke-width:원의 경계선 너비 
      stroke-dasharray: 얼마나 채울지, 얼마나 비울지 정의
      stroke-dashoffset: 어디서부터 원을 시작할 것인지 정의 */}
      {/* cx, cy는 중점 => 가로,세로 길이의 절반,  r는 반지름 */}
      <circle
        cx={containerSize / 2}
        cy={containerSize / 2}
        r={radius}
        // fill={"transparent"}
        strokeWidth={strokeWidth}
        // stroke={"#0F172A"}
        strokeDasharray={circumference}
        style={{
          strokeDashoffset: offset,
          // 동적인 값이므로 바로 속성으로 strokeDashoffset={offset}이 아니라 style로 넣어둠
        }}
        transform={`rotate(-90 ${containerSize / 2} ${containerSize / 2})`} // 3시 방향부터 시작하는거 12시로 바꾸는 코드
        className="transition-all duration-1000 ease-in-out fill-transparent stroke-gray-800"
      />
    </svg>
  );
}
