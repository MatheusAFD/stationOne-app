import { NavLink } from "react-router-dom";

interface Props {
  nameStep: string;
  onClick?: any;
}

export function ButtonSetps(props: Props) {
  return (
    <div className="flex justify-around gap-3 fixed bottom-0 left-0 right-0 z-10 bg-white h-20">
      <ul className="flex gap-20 mt-2 shadow-3xl w-full justify-center py-2 items-center">
        <NavLink
          to={`/food/start-order`}
          className="flex justify-center items-center bg-orange-900 w-[299px] h-9 rounded-full text-[14px] font-bold uppercase tracking-widest"
          onClick={props.onClick}
        >
          {props.nameStep}
        </NavLink>
      </ul>
    </div>
  );
}
