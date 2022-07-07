import { NavLink } from "react-router-dom";
import { InputAccount } from "../../components/InputAccount";
import { Logo } from "../../components/Logo";

export function Signup() {
  return (
    <>
      <form className="lg:mt-12 sans max-w-lg lg:m-auto sm:m-auto sm:items-center  ">
        <Logo name="Signup" />
        <div className="flex flex-col m-auto items-center w-[358px]">
          <div className="mb-4 mt-12">
            <label
              htmlFor="email"
              className="block text-sm text-[#424242] mb-[10px]"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter email..."
              className="border rounded-[4.5px] pl-[10px] h-10 w-[358px] "
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm text-[#424242]">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password..."
              className="border rounded-[4.5px] pl-[10px] h-10 w-[358px] mt-[10px]"
            />
          </div>
          <InputAccount
            value="signup"
            size="sm"
            class="bg-orange-900 h-10 mt-9 text-white w-[358px]"
          />
        </div>
      </form>

      <NavLink to="/login">
        <InputAccount
          value="already have an account?"
          size="sm"
          class="w-[358px] h-9 mt-9 text-[#999999] font-bold border absolute m-auto bottom-5 left-0 right-0 tracking-widest"
        />
      </NavLink>
    </>
  );
}
