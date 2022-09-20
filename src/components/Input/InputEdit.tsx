interface PropsInput {
  nameLabel?: string;
  value?: any;
  className?: string;
}

export function InputEdit(props: PropsInput) {
  return (
    <div className={props.className}>
      <label
        htmlFor={props.nameLabel}
        className="block text-sm text-[#424242] mb-[10px]"
      >
        {props.nameLabel}
      </label>

      <input
        type="email"
        id={props.nameLabel}
        defaultValue={props.value}
        className="border rounded-[4.5px] pl-[10px] h-10 w-[100%] "
      />
    </div>
  );
}
