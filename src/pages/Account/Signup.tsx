import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import InputMask from "react-input-mask";

import { useCreateUserContentMutation } from "../../graphql/generated";

import { InputAccount } from "../../components/Input/InputAccount";
import { Logo } from "../../components/Style/Logo";
import { verifyLogged } from "../../utils/verify-logged";
import { InputRegister } from "../../components/Input/InputRegister";

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
    const saltRounds = 12;
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
      alert("Erro ao cadastrar!");
    } finally {
      setLoading(false);
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

          <div className="flex flex-col justify-center mt-12">
            <InputRegister
              label="Full Name *"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              minLength={10}
            />

            <div className="mb-4 w-full flex flex-col items-center ">
              <label
                htmlFor="name"
                className="block text-sm text-[#424242] place-self-start px-2"
              >
                Phone Number *
              </label>

              <InputMask
                mask="(99) 9 9999-9999"
                placeholder="(00) 0 0000-0000"
                className="border rounded-[4.5px] pl-[10px] h-10 mt-[10px] w-[95%] max-w-[358px]"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                minLength={11}
              />
            </div>

            <InputRegister
              label="Email *"
              type="email"
              placeholder="Enter email..."
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputRegister
              label="Password *"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password..."
              minLength={6}
            />
            <InputAccount
              disabled={loading}
              value="signup"
              sizeText="sm"
              class="bg-orange-900 h-10 mt-9 text-white disabled:opacity-60 w-[95%] max-w-[358px]"
            />
          </div>
          <Link
            to="/login"
            className="flex justify-center pb-5 800tall:absolute 800tall:bottom-0 800tall:right-0 800tall:left-0"
          >
            <InputAccount
              value="already have an account?"
              sizeText="sm"
              class="w-[95%] max-w-[358px] h-9 mt-9 text-[#999999] font-bold border tracking-widest "
            />
          </Link>
        </form>
      </>
    </>
  );
}
