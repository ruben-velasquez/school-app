import { MouseEventHandler } from "react";

export default function Button({
  href,
  children,
  onclick,
  isButton,
  type,
}: ButtonProps) {
  return isButton ? (
    <button
      type={type}
      onClick={onclick}
      className="w-fit border py-2 px-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all tracking-wide shadow-lg shadow-blue-300/25 hover:shadow-blue-300/0 flex justify-center gap-2 items-center"
    >
      {children}
    </button>
  ) : (
    <a
      onClick={onclick}
      className="w-fit border py-2 px-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all tracking-wide shadow-lg shadow-blue-300/25 hover:shadow-blue-300/0 flex justify-center gap-2 items-center"
      href={href}
    >
      {children}
    </a>
  );
}

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  onclick?: MouseEventHandler;
  isButton?: boolean;
  type?: "button" | "submit" | "reset";
};
