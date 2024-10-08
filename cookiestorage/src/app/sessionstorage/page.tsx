"use client";

import useSessionStorage from "@/hooks/useSessionStorage";

export default function SessionStorage() {
  const [state, setState] = useSessionStorage("my-key", "foo");

  return (
    <div>
      <div>Value: {state}</div>
      <button onClick={() => setState("bar")}>bar</button>
      <button onClick={() => setState("baz")}>baz</button>
    </div>
  );
}
