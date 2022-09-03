import { Detail } from "./Detail";

export function Logo(props: { name: string }) {
  return (
    <div className="flex justify-center items-center mt-10 lg:m-auto w-[95%] max-w-[358px] ">
      <Detail />
      <strong className="text-2xl px-8">{props.name}</strong>
      <Detail />
    </div>
  );
}
