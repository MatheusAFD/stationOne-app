import { NavLink } from "react-router-dom";
import { InputAccount } from "../../components/InputAccount";
import HomeImg from "../../assets/img/Logo.jpg";

export function Index() {
  return (
    <>
      <div className="flex justify-center items-center mt-[107px]  ">
        <img
          src={HomeImg}
          alt=""
          className="max-h-[293px] "
          width={293}
          height={190}
        />
      </div>

      <div className="flex flex-col justify-center items-center font-semibold sans text-sm tracking-wide gap-[14px] absolute bottom-10 left-0 right-0">
        <NavLink to="/signup">
          <InputAccount
            value="sign up"
            size="sm"
            class="bg-orange-900 w-[299px] h-9 tracking-widest shadow-3xl uppercase"
          />
        </NavLink>

        <NavLink to="/login" className="flex ">
          <InputAccount
            value="log in"
            size="sm"
            class={`border border-[#862924] text-[#862924] ')] w-[299px] h-9 tracking-widest uppercase`}
          />
        </NavLink>
      </div>
    </>
  );
}
