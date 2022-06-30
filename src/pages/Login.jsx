import { Link } from "react-router-dom";

export function Login() {
  return (
    <>
      <div className="flex justify-center items-center mt-[107px] ">
        <img
          src="./src/assets/img/Logo.jpg"
          alt=""
          className="max-h-[293px] "
        />
      </div>

      <div className="flex flex-col justify-center items-center font-semibold sans text-sm tracking-wide gap-[14px] absolute bottom-10 left-0 right-0">
        <Link to={"/signup"}>
          <input
            type="button"
            value="SIGN UP"
            className="bg-orange-900 rounded-3xl w-[299px] h-9 tracking-widest shadow-3xl"
          />
        </Link>
        <input
          type="button"
          value="LOG IN"
          className="border border-[#862924] text-[#862924] rounded-3xl w-[299px] h-9 tracking-widest"
        />
      </div>
    </>
  );
}
