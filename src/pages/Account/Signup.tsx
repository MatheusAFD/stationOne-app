import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import InputMask from "react-input-mask";
import { InputAccount } from "../../components/InputAccount";
import { Logo } from "../../components/Logo";
import { verifyLogged } from "../../utils/verifyLogged";
import { useCreateUserContentMutation } from "../../graphql/generated";

export function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [createUser] = useCreateUserContentMutation();

  verifyLogged();

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
        },
      });
      navigate("/login");
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
          className="lg:mt-12 sans m-auto sm:items-center max-w-[358px]"
          onSubmit={handleUser}
        >
          <Logo name="Signup" />

          <div className="flex flex-col justify-center">
            <div className="mb-4 mt-12 w-full flex flex-col items-center">
              <label
                htmlFor="name"
                className="block text-sm text-[#424242] place-self-start px-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="border rounded-[4.5px] pl-[10px] h-10 mt-[10px] w-[95%] max-w-[358px]"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                maxLength={40}
              />
            </div>

            <div className="mb-4 w-full flex flex-col items-center ">
              <label
                htmlFor="name"
                className="block text-sm text-[#424242] place-self-start px-2"
              >
                Phone Number
              </label>

              <InputMask
                mask="(99) 9 9999-9999"
                placeholder="(00) 0 0000-0000"
                className="border rounded-[4.5px] pl-[10px] h-10 mt-[10px] w-[95%] max-w-[358px]"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className="mb-4 w-full flex flex-col items-center ">
              <label
                htmlFor="email"
                className="block text-sm text-[#424242] mb-[10px] place-self-start px-2"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter email..."
                className="border rounded-[4.5px] pl-[10px] h-10 w-[95%] max-w-[358px]"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-4 w-full flex flex-col items-center ">
              <label
                htmlFor="password"
                className="block text-sm text-[#424242] place-self-start px-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password..."
                className="border rounded-[4.5px] pl-[10px] h-10 mt-[10px] w-[95%] max-w-[358px]"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                maxLength={11}
                minLength={6}
              />
              <InputAccount
                disabled={loading}
                value="signup"
                size="sm"
                class="bg-orange-900 h-10 mt-9 text-white disabled:opacity-60 w-[95%] max-w-[358px]"
              />
            </div>
          </div>
          <Link
            to="/login"
            className="flex justify-center pb-5 800tall:absolute 800tall:bottom-0 800tall:right-0 800tall:left-0"
          >
            <InputAccount
              value="already have an account?"
              size="sm"
              class="w-[95%] max-w-[358px] h-9 mt-9 text-[#999999] font-bold border tracking-widest "
            />
          </Link>
        </form>
      </>
    </>
  );
}
