import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color: string;
  onClick: () => void;
  disabled: boolean;
}

export default function Button({
  children,
  color,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      style={{ backgroundColor: `${color}` }}
      className="px-2 py-1 rounded-md mb-5"
    >
      {children}
    </button>
  );
}
