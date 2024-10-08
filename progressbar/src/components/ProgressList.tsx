"use client";
import { useEffect, useState } from "react";

const ProgressItem = ({
  hasNext,
  title,
  content,
  isActivated,
  onCompleted,
}: {
  title: string;
  content: string[];
  isActivated: boolean;
  hasNext: boolean;
  onCompleted?: () => void;
}) => {
  const [currentItem, setCurrentItem] = useState(content[0]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActivated) {
      interval = setInterval(() => {
        if (index < content.length) {
          setCurrentItem(content[index]);
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          interval && clearInterval(interval);
          onCompleted?.();
          setIsCompleted(true);
        }
      }, 700);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [index, content, onCompleted, isActivated]);

  const textColorStyle =
    isActivated || isCompleted ? "text-black" : "text-gray-400";

  return (
    <div className={"flex justify-start items-center h-8"}>
      <span className="relative flex h-2 w-2 mr-3">
        {/* pulse */}
        <span
          data-active={isActivated}
          className={`data-[active=false]:hidden absolute animate-ping inline-flex h-full w-full rounded-full bg-primary-400 opacity-75`}
        />
        {/* line */}
        {hasNext && (
          <span
            className={
              "absolute left-[50%] top-0 w-[1px] h-8 bg-gray-200 -translate-x-[0.5px]"
            }
          />
        )}
        {/* dot */}
        <span
          data-active={isActivated}
          className="relative inline-flex rounded-full h-2 w-2 bg-primary-500 data-[active=false]:bg-white data-[active=false]:border-2"
        />
        {/*  completed check */}
        {isCompleted && (
          <span
            className={
              "absolute top-0 left-0 h-2 w-2 bg-primary-500 rounded-full"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-check absolute top-0 left-0 h-2 w-2 text-white"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </span>
        )}
      </span>
      <span className={"flex justify-start text-start " + textColorStyle}>
        <span
          className={
            "transition text-sm min-w-[150px] font-semibold duration-300 ease-in"
          }
        >
          {title}
        </span>
        <span className={""}>
          {content.map((c) => (
            <span
              key={c}
              className={`absolute text-sm line-clamp-1 transition-opacity ${
                c === currentItem ? "opacity-100" : "opacity-0"
              } duration-300 ease-in`}
            >
              {c + (isActivated ? " 검색중..." : "")}
            </span>
          ))}
        </span>
      </span>
    </div>
  );
};

const ProgressList = () => {
  const [step, setStep] = useState<
    "initial" | "animation1" | "animation2" | "animation3" | "completed"
  >("initial");

  useEffect(() => {
    setStep("animation1");
  }, []);

  return (
    <ul className={"px-6 mb-4"}>
      <ProgressItem
        title={"첫번째 항목 검토"}
        isActivated={step === "animation1"}
        content={[
          "국토의 계획 및 이용에 관한 법률",
          "제주특별자치도 도시계획 조례",
        ]}
        hasNext
        onCompleted={() => {
          setStep("animation2");
        }}
      />
      <ProgressItem
        title={"두번째 항목 검토"}
        isActivated={step === "animation2"}
        content={["건축법", "제주특별자치도건축조례"]}
        hasNext
        onCompleted={() => {
          setStep("animation3");
        }}
      />
      <ProgressItem
        title={"세번째 항목 검토"}
        isActivated={step === "animation3"}
        content={[
          "주차장법",
          "제주시 주차장조례",
          "장애인 노인 임산부 등의 편의증진 보장에 관한 법률",
        ]}
        hasNext={false}
        onCompleted={() => {
          setStep("completed");
        }}
      />
    </ul>
  );
};

export default ProgressList;
