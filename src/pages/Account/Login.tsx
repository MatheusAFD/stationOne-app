import { gql, useQuery } from "@apollo/client";
import { FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { InputAccount } from "../../components/InputAccount";
import { Logo } from "../../components/Logo";
import bcrypt from "bcryptjs";
import { DebounceInput } from "react-debounce-input";

interface GetUserQueryResponse {
  userContent: {
    name: string;
    email: string;
    password: string;
    phone: string;
    avatarURL: string;
  };
}

const GET_USER_QUERY = gql`
  query GetUserByEmail($email: String) {
    userContent(where: { email: $email }) {
      id
      name
      email
      password
      phone
      avatarURL
    }
  }
`;

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data } = useQuery<GetUserQueryResponse>(GET_USER_QUERY, {
    variables: { email },
  });

  function SaveUserData(data: any) {
    localStorage.setItem("logged", "1");
    localStorage.setItem("name", data.userContent.name);
    localStorage.setItem("phone", data.userContent.phone);
    localStorage.setItem("email", data.userContent.email);
    localStorage.setItem("avatarURL", data.userContent.avatarURL);
  }

  async function LoginUser(event: FormEvent) {
    event.preventDefault();

    if (email === data?.userContent.email) {
      const isValidPassword = await bcrypt.compare(
        password,
        data.userContent.password
      );

      if (isValidPassword) {
        navigate("/food");
        SaveUserData(data);
      }
      if (!isValidPassword) {
        return alert("Preencha corretamente");
      }
    }
  }

  if (sessionStorage.getItem("logged") == "1") {
    navigate("/food");
  }

  return (
    <>
      <form
        className="lg:mt-12 sans m-auto sm:items-center max-w-[358px]"
        onSubmit={LoginUser}
      >
        <Logo name="Login" />
        <div className="flex flex-col justify-center">
          <div className="mb-4 mt-12 w-full flex flex-col items-center">
            <label
              htmlFor="email"
              className="block text-sm text-[#424242] mb-[10px] place-self-start px-2"
            >
              Email
            </label>

            <DebounceInput
              placeholder="Enter email..."
              element="input"
              type="email"
              id="email"
              minLength={15}
              className="border rounded-[4.5px] pl-[10px] h-10 w-[95%] max-w-[358px] "
              debounceTimeout={1000}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="mb-4 flex flex-col items-center">
            <label
              htmlFor="password"
              className="block text-sm text-[#424242] place-self-start px-2"
            >
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
              className="border rounded-[4.5px] pl-[10px] h-10 w-[95%] max-w-[358px] mt-[10px]"
            />
          </div>
          <div className="flex flex-col items-center">
            <InputAccount
              value="login"
              size="sm"
              class="bg-orange-900 h-10 mt-9 text-white w-[95%] max-w-[358px]"
            />

            <NavLink
              to="/resetpassword"
              className="tracking-widest uppercase mt-5 text-[#999999] text-sm font-bold "
            >
              forgot password?
            </NavLink>
          </div>
        </div>
        <NavLink
          to="/signup"
          className="flex justify-center pb-5 800tall:absolute 800tall:bottom-0 800tall:right-0 800tall:left-0"
        >
          <InputAccount
            value="sign up"
            size="sm"
            class="w-[95%] max-w-[358px] h-9 mt-9 text-[#999999] font-bold border tracking-widest"
          />
        </NavLink>
      </form>
    </>
  );
}
