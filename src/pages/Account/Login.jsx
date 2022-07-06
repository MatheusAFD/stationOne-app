import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { InputAccount } from "../../components/InputAccount";
import { LoadingCircle } from "../../components/LoadingCircle";
import { Logo } from "../../components/Logo";
import bcrypt from "bcryptjs";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const GET_USER_BY_EMAIL = gql`
    query MyQuery {
      userContent(where: { email: "matheus.alst@outlook.com" }) {
        id
        name
        email
        password
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_USER_BY_EMAIL);

  if (loading) return <LoadingCircle />;
  if (error) return `Error! ${error.message}`;

  async function LoginUser(event) {
    event.preventDefault();
    if (email == data.userContent.email) {
      const isValidPassword = await bcrypt.compare(
        password,
        data.userContent.password
      );

      if (isValidPassword) {
        return navigate("/home/food");
      }
      if (!isValidPassword) {
        return alert("Preencha corretamente");
      }
    }
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name=""
            id="password"
            placeholder="Enter password..."
            className="border rounded-[4.5px] pl-[10px] h-10 w-[358px] mt-[10px]"
          />
        </div>

        <InputAccount
          type="submit"
          value="login"
          size="sm"
          class="bg-orange-900 h-10 mt-9 text-white w-[358px]"
        />
      </form>
      <NavLink
        to="/resetpassword"
        className="flex justify-center text-sm font-bold text-[#999999] mt-6 tracking-widest uppercase lg:justify-start lg:ml-28"
      >
        forgot password
      </NavLink>
      <NavLink to="/signup">
        <InputAccount
          value="sign up"
          size="sm"
          class="w-[358px] h-9 mt-9 text-[#999999] font-bold border absolute m-auto bottom-5 left-0 right-0 tracking-widest"
        />
      </NavLink>
    </>
  );
}
