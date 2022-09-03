import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  setProps: any;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
}

export function InputRegister(props: InputProps) {
  return (
    <div className="mb-4 flex flex-col items-center">
      <label
        htmlFor="email"
        className="block text-sm text-[#424242] mb-[10px] place-self-start px-2"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="border rounded-[4.5px] pl-[10px] h-10 w-[95%] max-w-[358px] "
        onChange={(e) => {
          props.setProps(e.target.value);
        }}
      />
    </div>
  );
}
