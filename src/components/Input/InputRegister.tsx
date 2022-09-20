import { InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
        {...props}
        className="border rounded-[4.5px] pl-[10px] h-10 w-[95%] max-w-[358px] "
        required={true}
      />
    </div>
  );
}
