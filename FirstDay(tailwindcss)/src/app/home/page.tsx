"use client";

import CustomSelector from "@/components/CustomSelector";
import Grid from "@/components/Grid";
import Group from "@/components/Group";
import Modal from "@/components/Modal";
import TextGradient from "@/components/TextGradient";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const items = {
  ALL: "모든 타입",
  LEGACY: "Legacy",
  V1: "Version 1",
  V2: "Version 2",
  V3: "Version 3",
};
const selectItems = Object.entries(items).map(([key, value]) => ({
  key,
  label: value,
}));

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      {/* <CustomSelector items={selectItems} initialItem={selectItems[0]} /> */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>
      {isOpen && (
        <Modal
          title={"Modal Title"}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="p-8">
            <p className="mt-4">Modal Content</p>
          </div>
        </Modal>
      )}
      {/* <TextGradient /> */}
      {/* <Group /> */}
      {/* <Grid /> */}
    </main>
  );
}
