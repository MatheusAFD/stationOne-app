import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bcrypt from 'bcryptjs'

import { useGetUserByEmailLazyQuery } from '../../graphql/generated'

import { InputAccount } from '../../components/Input/InputAccount'
import { Logo } from '../../components/Style/Logo'
import { InputRegister } from '../../components/Input/InputRegister'
import { saveUserData } from '../../common/utils/save-user-data'

export function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [getData] = useGetUserByEmailLazyQuery()

  async function returnUser() {
    const returnUser = await getData({
      variables: {
        email,
      },
    })

    return returnUser.data
  }

  async function handleLoginUser(e: FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const dataUser = await returnUser()

      if (email === dataUser?.userContent?.email) {
        const isValidPassword = await bcrypt.compare(
          password,
          dataUser.userContent.password,
        )

        if (isValidPassword) {
          navigate('/food')
          saveUserData(dataUser)
        }
        if (!isValidPassword) {
          return [alert('Preencha corretamente'), setLoading(false)]
        }
      } else {
        alert('Preencha corretamente')
      }
    } catch (err) {
      alert(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form
        className="lg:mt-12 sans m-auto sm:items-center max-w-[358px]"
        onSubmit={handleLoginUser}
      >
        <Logo name="Login" />
        <div className="flex flex-col justify-center mt-12">
          <InputRegister
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            type="email"
            placeholder="Enter email..."
          />
          <InputRegister
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter email..."
          />

          <div className="flex flex-col items-center">
            <InputAccount
              disabled={loading}
              value="login"
              sizeText="sm"
              className="bg-orange-900 h-10 mt-9 text-white w-[95%] max-w-[358px] disabled:opacity-60 "
            />

            <Link
              to="/resetpassword"
              className="tracking-widest uppercase mt-5 text-[#999999] text-sm font-bold "
            >
              forgot password?
            </Link>
          </div>
        </div>
      </form>

      <Link
        to="/signup"
        className="flex justify-center pb-5 800tall:absolute 800tall:bottom-0 800tall:right-0 800tall:left-0 "
      >
        <InputAccount
          value="sign up"
          sizeText="sm"
          className="w-[95%] max-w-[358px] h-9 mt-9 text-[#999999] font-bold border tracking-widest place-content-end hover:bg-slate-100 hover:text-black"
        />
      </Link>
    </>
  )
}
