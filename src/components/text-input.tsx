import { ChangeEventHandler } from "react";

export default function TextInput({
  placeholder,
  name,
  required,
  value,
  onChange,
  className,
}: TextInputProps) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      type="text"
      className={`p-2 w-full rounded-lg border border-box-border focus:border-white ${className}`}
    />
  );
}

type TextInputProps = {
  placeholder?: string;
  name?: string;
  required?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
};
