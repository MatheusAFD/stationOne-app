import { ArrowLeft, GearSix } from "phosphor-react";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  returnNav: any;
  hasIcon?: true | false;
  hasBack?: true | false;
  title?: string | string[];
}

export function Header(props: HeaderProps) {
  return (
    <header className="w-full bg-[#862924] max-h-14 h-14 shadow-4xl">
      {props.hasIcon && (
        <NavLink to="/profile/edit" className="absolute right-3 m-auto py-4">
          <GearSix
            size={24}
            color="#ffffff"
            weight="fill"
            className="cursor-pointer mr-4"
          />
        </NavLink>
      )}

      {props.hasBack && (
        <div className="flex justify-around items-center p-3 ">
          <NavLink
            to={""}
            onClick={props.returnNav}
            className="flex items-center"
          >
            <ArrowLeft
              size={24}
              color="#ffffff"
              weight="bold"
              className="ml-[-2.3rem] absolute left-12"
            />
          </NavLink>
          <h1 className="text-white font-semibold text-xl capitalize ">
            {props.title}
          </h1>
          <h1></h1>
        </div>
      )}
    </header>
  );
}
