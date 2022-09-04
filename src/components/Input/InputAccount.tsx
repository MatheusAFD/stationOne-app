interface DataProps {
  value: string;
  class: string;
  size: string;
  disabled?: boolean;
}

export function InputAccount(props: DataProps) {
  return (
    <input
      disabled={props.disabled}
      type="submit"
      value={props.value}
      className={`${props.class} rounded-3xl text-${props.size} cursor-pointer uppercase hover:brightness-90`}
    />
  );
}
