import { GearSix } from "phosphor-react";

interface HeaderProps {
  hasIcon?: true | false;
}

export function Header(props: HeaderProps) {
  return (
    <header className="w-full bg-[#862924] max-h-14 h-14 shadow-4xl">
      {props.hasIcon && (
        <div className="flex h-full justify-end items-center  ">
          <GearSix
            size={24}
            color="#ffffff"
            weight="fill"
            className="cursor-pointer mr-4"
          />
        </div>
      )}
    </header>
  );
}
