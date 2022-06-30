export function InputAccount(props) {
  return (
    <input
      type="submit"
      value={props.value}
      className={`${props.class} rounded-3xl text-${props.size} cursor-pointer`}
    />
  );
}
