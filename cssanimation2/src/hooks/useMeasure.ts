import { RefCallback, useCallback, useEffect, useState } from "react";

type Element = HTMLElement | null;

export interface RectReadOnly {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
}

/**
 * useMeasure
 * 크기를 동적으로 재는 useMeasure
 * - 요소의 크기에 정확히 맞게 동작해야 할때 사용
 * - 크기를 동적으로 재는 것이 필요한 애니메이션에 사용
 */

export default function useMeasure(): [RefCallback<Element>, RectReadOnly] {
  const [element, setElement] = useState<Element>(null);
  const [currentRect, setCurrentRect] = useState<RectReadOnly>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  // 요소가 변경될때마다, 요소의 node를 받아서 element에 저장
  const ref = useCallback((node: Element) => {
    setElement(node);
  }, []);

  useEffect(() => {
    // element 없으면 return
    if (!element) return;
    // resize observer 생성
    const resizeObserver = new ResizeObserver((entries) => {
      setCurrentRect(entries[0].contentRect);
      // borderBoxSize(배열로 되어있음 - blocksize, inlinesize), contentBoxSize(배열로 되어있음), contentRect(객체 형태)
    });
    // observer start
    resizeObserver.observe(element);

    // cleanup
    return () => {
      resizeObserver.unobserve(element);
    };
  }, [element]);

  return [ref, currentRect];
}
