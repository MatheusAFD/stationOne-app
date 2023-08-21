import { Header } from '../../components/Header/Header'
import { IconStripe } from '../../components/Style/IconStripe'

export function Profile() {
  return (
    <>
      <Header hasIcon={true} />
      <div className=" flex flex-col justify-center items-center text-center ">
        <h1 className="text-[26px] font-semibold mt-6">
          {' '}
          {localStorage.getItem('name')}
        </h1>

        <div className="flex justify-center items-center mt-5 ">
          <img
            src={localStorage.getItem('avatarURL') || ''}
            alt=""
            className="max-h-[160px] rounded-full"
            width={160}
            height={100}
          />
        </div>

        <div className="mt-11">
          <span className="text-gray-500 text-sm">Phone Number</span>

          <p className="text-xl">{localStorage.getItem('phone')}</p>
        </div>

        <div className="mt-9">
          <span className="text-gray-500 text-sm">Email</span>
          <p className="text-xl">{localStorage.getItem('email')}</p>
        </div>

        <div className="bg-[#dd3300] rounded-[5px] mt-[53px] max-w-[307px]">
          <p className="p-4 text-white font-semibold text-sm leading-none text-left">
            An unknown error occurred. Please make sure your card number is
            correct and try again.
          </p>
        </div>

        <div className="flex bg-[#28a0e5] w-[307px] items-center gap-3 rounded-[5px] mt-3 p-1 mb-20">
          <IconStripe />
          <p className="text-white font-semibold text-sm leading-none">
            Connect with Stripe
          </p>
        </div>
      </div>
    </>
  )
}
