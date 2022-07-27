import { Detail } from "./Detail";

interface LogoProps {
  name: string;
}

export function Logo(props: LogoProps) {
  return (
    <div className="flex justify-center items-center mt-10 lg:m-auto w-[95%] max-w-[358px]">
      <Detail />
      <strong className="text-2xl px-8">{props.name}</strong>
      <Detail />
    </div>
  );
}
