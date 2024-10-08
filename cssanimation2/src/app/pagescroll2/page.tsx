"use client";

import { InView } from "react-intersection-observer";

const PAGE_TITLES = ["Don't", "you", "just", "hate", "popups?"];

function PageScroll() {
  return (
    <div>
      {PAGE_TITLES.map((title) => (
        <InView triggerOnce rootMargin={"-100px 0px"} key={title}>
          {({ inView, ref }) => {
            const styleClass = inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10";
            return (
              <div className="flex justify-center items-center h-screen">
                <h2
                  ref={ref}
                  className={`transition-all ${styleClass} delay-150 text-6xl`}
                >
                  {title}
                </h2>
              </div>
            );
          }}
        </InView>
      ))}
    </div>
  );
}

export default PageScroll;
