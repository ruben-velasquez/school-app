import { ChangeEventHandler } from "react";

export default function Selector({
  value,
  onChange,
  options,
  name,
}: SelectorProps) {
  return (
    <div className="relative group w-fit">
      <select
        defaultValue={value}
        onChange={onChange}
        name={name || "task-priority"}
        className="px-2 py-2 rounded-lg border border-white appearance-none h-full pr-8"
      >
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="absolute top-[calc(50%-12px)] right-3 font-mono font-bold rotate-90 select-none">
        &gt;
      </span>
    </div>
  );
}

type SelectorProps = {
  name?: string;
  value?: string;
  options?: string[];
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};
