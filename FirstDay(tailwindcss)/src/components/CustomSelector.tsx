"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

type Selectable = {
  key: string;
  label: string;
};

type CustomSelectorProps = {
  items: Selectable[];
  initialItem: Selectable;
};

export default function CustomSelector({
  items,
  initialItem,
}: CustomSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const triggerRadius = isOpen ? "rounded-t-md rounded-b-none" : "rounded-md";
  const listItemHeight = "min-h-12";

  return (
    <Select
      isOpen={isOpen}
      onOpenChange={() => setIsOpen((prev) => !prev)}
      onSelectionChange={(keys) => {
        const selectedKey = (keys as Set<React.Key>).values().next()
          .value as string;
      }}
      variant="bordered"
      defaultSelectedKeys={[initialItem.key]}
      classNames={{
        base: ["max-w-32"],
        trigger: [
          "border",
          listItemHeight,
          triggerRadius,
          "data-[open=true]:border-red",
          "data-[focus=true]:border-red",
          "data-[hover=true]:border-red",
        ],
        selectorIcon: ["ease-in-out", "duration-[250ms]"],
      }}
      selectionMode="single"
      // disallowEmptySelection
      listboxProps={{
        variant: "light",
        className: "p-0",
      }}
      popoverProps={{
        offset: 0,
        classNames: {
          content: [
            "p-0",
            "border",
            "border-default-200",
            "shadow-none",
            "rounded-b-md rounded-t-none",
          ],
        },
      }}
    >
      {items.map((item, i) => (
        <SelectItem
          key={item.key}
          classNames={{
            base: ["m-0", "text-neutral-400", listItemHeight],
          }}
          showDivider={i !== items.length - 1}
          hideSelectedIcon
        >
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
}
