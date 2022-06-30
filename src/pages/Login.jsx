import { Link } from "react-router-dom";
import { InputAccount } from "../components/InputAccount";

export function Login() {
  return (
    <>
      <div className="flex justify-center mt-12 lg:justify-start lg: ml-5">
        <strong className="text-2xl">Login</strong>
      </div>

      <form className="mt-12 ml-4 sans">
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

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm text-[#424242]">
            Password
          </label>
          <input
            type="email"
            name=""
            id="password"
            placeholder="Enter password..."
            className="border rounded-[4.5px] pl-[10px] h-10 w-[358px] mt-[10px]"
          />
        </div>

        <InputAccount
          value="LOGIN"
          size="sm"
          class="bg-orange-900 h-10 mt-9 text-white w-[358px]"
        />
      </form>

      <span className="flex justify-center text-sm font-bold text-[#999999] mt-6 tracking-widest lg:justify-start lg:ml-28">
        FORGOT PASSWORD?
      </span>

      <Link to={"/signup"}>
        <InputAccount
          value="SIGN UP"
          size="sm"
          class="w-[358px] h-9 mt-9 text-[#999999] font-bold border absolute m-auto bottom-5 left-0 right-0 tracking-widest"
        />
      </Link>
    </>
  );
}
