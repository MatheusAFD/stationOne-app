import { gql, useQuery } from "@apollo/client";
import { FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { InputAccount } from "../../components/InputAccount";
import { Logo } from "../../components/Logo";
import bcrypt from "bcryptjs";

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
    sessionStorage.setItem("logged", "1");
    sessionStorage.setItem("name", data.userContent.name);
    sessionStorage.setItem("phone", data.userContent.phone);
    sessionStorage.setItem("email", data.userContent.email);
    sessionStorage.setItem("avatarURL", data.userContent.avatarURL);
  }

  async function LoginUser(event: FormEvent) {
    event.preventDefault();

    if (email === data?.userContent.email) {
      const isValidPassword = await bcrypt.compare(
        password,
        data.userContent.password
      );

      if (isValidPassword) {
        navigate("/home/food");
        SaveUserData(data);
      }
      if (!isValidPassword) {
        return alert("Preencha corretamente");
      }
    }
  }

  if (sessionStorage.getItem("logged") == "1") {
    navigate("/home/food");
  }

  return (
    <>
      <form
        className="lg:mt-12 sans max-w-lg lg:m-auto sm:m-auto sm:items-center  "
        onSubmit={LoginUser}
      >
        <Logo name="Login" />
        <div className="flex flex-col m-auto items-center w-[358px]">
          <div className="mb-4 mt-12">
            <label
              htmlFor="email"
              className="block text-sm text-[#424242] mb-[10px]"
            >
              Email
            </label>

            <input
              onBlur={(e) => {
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
            value="login"
            size="sm"
            class="bg-orange-900 h-10 mt-9 text-white w-[358px]"
          />
        </div>
      </form>

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
