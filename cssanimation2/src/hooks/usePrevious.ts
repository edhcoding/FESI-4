import { useEffect, useRef } from "react";

function usePrevious<T>(currentValue: T) {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = currentValue;
  }, [currentValue]);

  return ref.current;
}

export default usePrevious;
