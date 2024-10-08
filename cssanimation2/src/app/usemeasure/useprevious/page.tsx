"use client";

import usePrevious from "@/hooks/usePrevious";
import { useState } from "react";

export default function usePreviouss() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const prevCount = usePrevious(count);
  const previous = usePrevious(isOpen);

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <p>
        Now: {count}, before: {prevCount}
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-400 px-3 py-2"
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-blue-400 px-3 py-2"
        >
          -
        </button>
      </div>
      <p>isOpen: {isOpen ? "true" : "false"}</p>
      <p>
        {previous === undefined ? "undefined" : previous ? "true" : "false"}
      </p>
      <button onClick={() => setIsOpen(true)}>Button</button>
    </div>
  );
}
