"use client";

import useMeasure from "@/hooks/useMeasure";
import { useEffect } from "react";

export default function UseMeasure() {
  const [ref, bounds] = useMeasure();

  useEffect(() => {
    console.log("bounds: ", bounds);
  }, [bounds]);

  return (
    <main className="container mx-auto flex w-screen h-screen items-center justify-between">
      <div className="w-full">
        <textarea className="bg-blue-500/20 resize border-4" ref={ref} />
        <p>Height: {bounds.height}</p>
      </div>
    </main>
  );
}
