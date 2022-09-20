import { InputHTMLAttributes } from "react";
interface DataProps extends InputHTMLAttributes<HTMLInputElement> {
  class: string;
  sizeText: string;
}

export function InputAccount(props: DataProps) {
  return (
    <input
      disabled={props.disabled}
      type="submit"
      value={props.value}
      className={`${props.class} rounded-3xl text-${props.sizeText} cursor-pointer uppercase hover:brightness-90`}
    />
  );
}
