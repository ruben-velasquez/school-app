import { ChangeEventHandler } from "react";

export default function TextArea({
  placeholder,
  name,
  required,
  value,
  onChange,
}: TextAreaProps) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full min-h-[100px] max-h-[300px] rounded-lg border border-box-border p-2 focus:border-white
    "
    />
  );
}

type TextAreaProps = {
  placeholder?: string;
  name?: string;
  required?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};
