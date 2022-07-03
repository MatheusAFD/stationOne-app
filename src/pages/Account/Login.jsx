import { Link, useNavigate, useParams } from "react-router-dom";
import { InputAccount } from "../../components/InputAccount";
import { Logo } from "../../components/Logo";

export function Login() {
  const navigate = useNavigate();

  function LoginUser(event) {
    event.preventDefault();

    navigate("/home");
  }

  return (
    <>
      <Logo name="Login" />
      <form className="mt-12 ml-4 sans" onSubmit={LoginUser}>
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
            type="password"
            name=""
            id="password"
            placeholder="Enter password..."
            className="border rounded-[4.5px] pl-[10px] h-10 w-[358px] mt-[10px]"
          />
        </div>

        <InputAccount
          type="submit"
          value="LOGIN"
          size="sm"
          class="bg-orange-900 h-10 mt-9 text-white w-[358px]"
        />
      </form>
      <Link
        to="/resetpassword"
        className="flex justify-center text-sm font-bold text-[#999999] mt-6 tracking-widest lg:justify-start lg:ml-28"
      >
        FORGOT PASSWORD?
      </Link>
      <Link to="/signup">
        <InputAccount
          value="SIGN UP"
          size="sm"
          class="w-[358px] h-9 mt-9 text-[#999999] font-bold border absolute m-auto bottom-5 left-0 right-0 tracking-widest"
        />
      </Link>
    </>
  );
}
