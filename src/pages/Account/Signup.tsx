import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { InputAccount } from "../../components/InputAccount";
import { LoadingCircle } from "../../components/LoadingCircle";
import { Logo } from "../../components/Logo";
import bcrypt from "bcryptjs";

const CREATE_USER_MUTATION = gql`
  mutation createUserContent(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUserContent(
      data: { name: $name, email: $email, password: $password }
    ) {
      id
    }
  }
`;

const UPDATE_STAGE_STATUS = gql`
  mutation MyMutation {
    publishManyUsersContents {
      count
    }
  }
`;

export function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [encrypt, setEncrypt] = useState("");

  const [createUser, { loading }] = useMutation(CREATE_USER_MUTATION);
  const [updateStatus] = useMutation(UPDATE_STAGE_STATUS);

  // function Encrypt() {
  //   let saltRounds = 10;
  //   bcrypt.hash(password, saltRounds).then((passHashed) => {
  //     setEncrypt(passHashed);
  //   });
  // }

  async function CreateUser(event: FormEvent) {
    event.preventDefault();

    // Encrypt();

    await createUser({
      variables: {
        name,
        email,
        password: password,
        featured: true,
      },
    });

    await updateStatus();

    navigate("/login");
  }

  if (loading) {
    return <LoadingCircle />;
  }

  return (
    <>
      <form
        className="lg:mt-12 sans max-w-lg lg:m-auto sm:m-auto sm:items-center "
        onSubmit={CreateUser}
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
            <label htmlFor="password" className="block text-sm text-[#424242]">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password..."
              className="border rounded-[4.5px] pl-[10px] h-10 w-[358px] mt-[10px]"
              onChange={(e) => {
                setPassword(e.target.value);
                // Encrypt();
              }}
            />
          </div>

          <InputAccount
            disabled={loading}
            value="signup"
            size="sm"
            class="bg-orange-900 h-10 mt-9 text-white w-[358px] disabled:opacity-50"
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
