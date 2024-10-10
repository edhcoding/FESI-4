"use client";

import { Input } from "@nextui-org/react";

export default function MyInput() {
  return (
    <Input
      isClearable
      type="email"
      label="Email"
      variant="bordered"
      placeholder="Enter your email"
      defaultValue="junior@nextui.org"
      onClear={() => console.log("input cleared")}
      className="max-w-xs"
    />
  );
}
