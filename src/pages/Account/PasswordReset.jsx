import { Link } from "react-router-dom";

export function PasswordReset() {
  return (
    <div className="px-4 mt-8 lg:flex lg:flex-col lg:items-center">
      <h1 className="text-2xl font-semibold">Password Reset</h1>
      <p className="text-sm text-[#777777]">
        Enter your email address we'll send you instructions on how to reset
        your password.
      </p>

      <form action="" className="mt-8 mb-4 lg:flex lg:flex-col">
        <label htmlFor="" className="text-xs block">
          Email
        </label>
        <input
          type="email"
          name=""
          id="email"
          placeholder="Enter email..."
          className="border rounded-[4.5px] pl-[10px] h-10 w-[358px] mb-4 "
        />
        <input
          type="submit"
          value="SUBMIT"
          className="bg-orange-900 h-10 w-[358px] text-sm font-semibold rounded-[4px]"
        />
      </form>
      <Link
        to="/login"
        className="flex justify-center text-sm font-bold text-[#999999] tracking-widest lg:justify-start "
      >
        CANCEL
      </Link>
    </div>
  );
}
