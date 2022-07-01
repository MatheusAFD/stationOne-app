import { Detail } from "./Detail";

export function Logo(props) {
  return (
    <div className="flex justify-center items-center mt-10 lg:justify-start lg: ml-5">
      <Detail class="" />
      <strong className="text-2xl px-8">{props.name}</strong>
      <Detail class="" />
    </div>
  );
}
