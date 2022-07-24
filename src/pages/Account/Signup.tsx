import { gql, useMutation } from "@apollo/client";
import { FormEvent, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { InputAccount } from "../../components/InputAccount";
import { Logo } from "../../components/Logo";
import bcrypt from "bcryptjs";
import InputMask from "react-input-mask";

const CREATE_USER_MUTATION = gql`
  mutation createUserContent(
    $name: String!
    $email: String!
    $password: String!
    $phone: String!
  ) {
    createUserContent(
      data: {
        name: $name
        email: $email
        password: $password
        phone: $phone
        avatarURL: "https://i.imgur.com/eWAvJId.png"
      }
    ) {
      id
    }
  }
`;

const UPDATE_STAGE_STATUS = gql`
  mutation MyMutation($email: String!) {
    publishUserContent(where: { email: $email }, to: PUBLISHED) {
      id
    }
  }
`;

export function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [createUser] = useMutation(CREATE_USER_MUTATION);
  const [updateStatus] = useMutation(UPDATE_STAGE_STATUS);

  async function encrypt() {
    let saltRounds = 12;
    const returnHash = await bcrypt.hash(password, saltRounds);
    return returnHash;
  }

  async function handleUser(event: FormEvent) {
    event.preventDefault();
    setLoading(true);

    try {
      const passHash = await encrypt();

      await createUser({
        variables: {
          name,
          email,
          phone,
          password: passHash,
          featured: true,
        },
      });

      await updateStatus({
        variables: {
          email,
        },
      });

      setLoading(false);
    } catch (err) {
      setLoading(false);
      navigate("/login");
    }
  }

  return (
    <>
      <>
        <form
          className="lg:mt-12 sans max-w-lg lg:m-auto sm:m-auto sm:items-center"
          onSubmit={handleUser}
        >
          <Logo name="Signup" />

          <div className="flex flex-col m-auto items-center w-[358px]">
            <div className="mt-12 mb-4">
              <label htmlFor="name" className="block text-sm text-[#424242]">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="border rounded-[4.5px] pl-[10px] h-10 w-[358px] mt-[10px]"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                maxLength={40}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm text-[#424242]">
                Phone Number
              </label>

              <InputMask
                mask="(99) 9 9999-9999"
                placeholder="(00) 0 0000-0000"
                className="border rounded-[4.5px] pl-[10px] h-10 w-[358px] mt-[10px]"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className="mb-4">
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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm text-[#424242]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password..."
                className="border rounded-[4.5px] pl-[10px] h-10 w-[358px] mt-[10px]"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                maxLength={11}
                minLength={6}
              />
            </div>

            <InputAccount
              disabled={loading}
              value="signup"
              size="sm"
              class="bg-orange-900 h-10 mt-9 text-white w-[358px] disabled:opacity-60"
            />
          </div>
          <NavLink
            to="/login"
            className="flex justify-center pb-5 800tall:absolute 800tall:bottom-0 800tall:right-0 800tall:left-0"
          >
            <InputAccount
              value="already have an account?"
              size="sm"
              class="w-[358px] h-9 mt-9 text-[#999999] font-bold border tracking-widest "
            />
          </NavLink>
        </form>
      </>
    </>
  );
}
