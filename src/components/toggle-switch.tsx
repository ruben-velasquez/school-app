export default function ToggleSwitch({
  name,
  options,
  onChange,
}: ToggleSwitchProps) {
    if(options.length < 2){
        throw new Error("ToggleSwitch component requires at least two options");
    }

    const changeValue = (value: string) => {
        const input = document.getElementById(name) as HTMLInputElement;
        
        input.checked = value === options[1];

        if (onChange) {
            onChange(value);
        }
    };

    const getValue = () => {
        const input = document.getElementById(name) as HTMLInputElement;

        return input?.checked ? options[1] : options[0];
    };

  return (
    <div className="flex gap-4 py-1 px-2 border border-box-border rounded-lg">
      <input type="checkbox" id={name} className="hidden" defaultChecked={false} />
      {options.map((option, index) => (
        <button key={index} onClick={() => changeValue(option)} 
            className={
                getValue() == option ? "text-white" : "text-inherit"
            }
        >
          {option}
        </button>
      ))}
    </div>
  );
}

type ToggleSwitchProps = {
  name: string;
  options: string[];
  onChange?: (value: string) => void;
};
