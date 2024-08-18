import { ChangeEventHandler } from "react";

export default function Selector({ value, onChange }: SelectorProps) {
  return (
    <div className="relative group w-fit">
      <select
        defaultValue={value || "Normal"}
        onChange={onChange}
        name="task-priority"
        className="px-2 py-2 rounded-lg border border-white appearance-none h-full pr-8"
      >
        <option value="Important">Important</option>
        <option value="Normal">Normal</option>
      </select>
      <span className="absolute top-[calc(50%-12px)] right-3 font-mono font-bold rotate-90 select-none">
        &gt;
      </span>
    </div>
  );
}

type SelectorProps = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};
