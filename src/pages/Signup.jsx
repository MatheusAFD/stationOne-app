import { Link } from "react-router-dom";
import { InputAccount } from "../components/InputAccount";

export function Signup() {
  return (
    <>
      <div className="flex justify-center mt-14 lg:justify-start lg: ml-5">
        <strong className="text-2xl">Signup</strong>
      </div>

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
            type="email"
            name=""
            id="password"
            placeholder="Enter password..."
            className="border rounded-[4.5px] pl-[10px] h-10 w-[358px] mt-[10px]"
          />
        </div>

        <InputAccount
          value="SIGNUP"
          size="sm"
          class="bg-orange-900 h-10 mt-9 text-white w-[358px]"
        />
      </form>

      <Link to={"/login"}>
        <InputAccount
          value="ALREADY HAVE AN ACCOUNT?"
          size="sm"
          class="w-[358px] h-9 mt-9 text-[#999999] font-bold border absolute m-auto bottom-5 left-0 right-0 tracking-widest"
        />
      </Link>
    </>
  );
}
