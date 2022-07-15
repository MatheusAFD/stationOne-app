import { ArrowLeft, GearSix } from "phosphor-react";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  hasIcon?: true | false;
  hasBack?: true | false;
  title?: string;
  linkTo?: string;
}

export function Header(props: HeaderProps) {
  return (
    <header className="w-full bg-[#862924] max-h-14 h-14 shadow-4xl">
      {props.hasIcon && (
        <NavLink
          to="/home/profile/edit"
          className="absolute right-3 m-auto py-4"
        >
          <GearSix
            size={24}
            color="#ffffff"
            weight="fill"
            className="cursor-pointer mr-4"
          />
        </NavLink>
      )}

      {props.hasBack && (
        <div className="flex justify-around items-center py-3">
          <NavLink to={`${props.linkTo}`}>
            <ArrowLeft
              size={24}
              color="#ffffff"
              weight="bold"
              className="ml-[-2.3rem]"
            />
          </NavLink>
          <h1 className="text-white font-semibold text-xl">{props.title}</h1>
          <h1></h1>
        </div>
      )}
    </header>
  );
}
