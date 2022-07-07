import { Detail } from "./Detail";

interface LogoProps {
  name: string;
}

export function Logo(props: LogoProps) {
  return (
    <div className="flex justify-center items-center mt-10 lg:justify-start lg: ml-5">
      <Detail />
      <strong className="text-2xl px-8">{props.name}</strong>
      <Detail />
    </div>
  );
}
