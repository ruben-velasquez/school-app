import React from "react";

export default function IconButton({
  children,
  onclick,
  className,
}: IconButtonProps) {
  return (
    <button
      onClick={onclick}
      className={`w-7 h-7 border border-box-border rounded-lg flex justify-center items-center hover:bg-box-border hover:text-white transition-all ${className}`}
    >
      {children}
    </button>
  );
}

type IconButtonProps = {
  children: React.ReactNode;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};
