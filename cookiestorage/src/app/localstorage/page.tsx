"use client";

import useLocalStorage from "@/hooks/useLocalStorage";

export default function Demo() {
  const [value, setValue, remove] = useLocalStorage("my-key", "foo");

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue("bar")}>bar</button>
      <button onClick={() => setValue("baz")}>baz</button>
      <button onClick={() => setValue((value) => value + "!")}>
        (value) =&gt; value + &quot;!&quot;
      </button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
}
