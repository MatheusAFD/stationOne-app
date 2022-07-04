import { NavLink } from "react-router-dom";
import { InputAccount } from "../../components/InputAccount";
import { Logo } from "../../components/Logo";

export function Signup() {
  return (
    <>
      <Logo name="Signup" />

      <form className="mt-12 ml-4">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm text-[#424242] mb-[10px]"
          >
            Email
          </label>

          <input
            type="email"
            name=""
            id="email"
            placeholder="Enter email..."
            className="border rounded-[4.5px] pl-[10px] h-10 w-[358px] "
          />
        </div>

        <div className="">
          <label htmlFor="password" className="block text-sm text-[#424242]">
            Password
          </label>
          <input
            type="password"
            name=""
            id="password"
            placeholder="Enter password..."
            className="border rounded-[4.5px] pl-[10px] h-10 w-[358px] mt-[10px]"
          />
        </div>

        <InputAccount
          value="signup"
          size="sm"
          class="bg-orange-900 h-10 mt-9 text-white w-[358px] uppercase"
        />
      </form>
      <NavLink to="/login">
        <InputAccount
          value="already have an account?"
          size="sm"
          class="w-[358px] h-9 mt-9 text-[#999999] font-bold border absolute m-auto bottom-5 left-0 right-0 tracking-widest uppercase"
        />
      </NavLink>
    </>
  );
}
