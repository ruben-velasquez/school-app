import { ChangeEventHandler } from "react";

export default function NumberInput({
  placeholder,
  name,
  required,
  value,
  onChange,
  className,
  step,
  min,
  max,
}: NumberInputProps) {
  return (
    <input
      type="number"
      name={name}
      placeholder={placeholder}
      required={required}
      defaultValue={value}
      onChange={onChange}
      className={`p-2 w-full rounded-lg border border-box-border focus:border-white ${className}`}
      step={step}
      min={min}
      max={max}
    />
  );
}

type NumberInputProps = {
  placeholder?: string;
  name?: string;
  required?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  step?: number;
  min?: number;
  max?: number;
};
