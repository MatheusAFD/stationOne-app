import { Power } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { InputAccount } from "../../components/InputAccount";
import { InputEdit } from "../../components/InputEdit";

export function ProfileSettings() {
  const navigate = useNavigate();

  function Redirect() {
    localStorage.setItem("logged", "0");
    return navigate("/");
  }

  function handleButton() {
    Redirect();
    localStorage.clear();
  }

  return (
    <>
      <Header
        hasBack={true}
        title="My Profile"
        returnNav={() => {
          navigate(-1);
        }}
      />
      <div className="flex flex-col sans m-auto  max-w-[370px] lg:mt-12 p-4">
        <InputEdit nameLabel="Full Name" value={localStorage.getItem("name")} />

        <label
          htmlFor="photo"
          className="block text-sm text-[#424242] mb-[10px] mt-4"
        >
          Profile Picture
        </label>
        <div className="flex flex-col justify-start items-center mb-2 bg-zinc-200 rounded">
          <img
            src={localStorage.getItem("avatarURL") || ""}
            alt=""
            className="w-[326px] h-[227px] object-contain"
            width={390}
            height={190}
          />
        </div>
        <p className="flex justify-center mb-4 text-[#f4a15d] cursor-pointer">
          Change Photo
        </p>

        <InputEdit
          nameLabel="Phone Number"
          value={localStorage.getItem("phone")}
          className="mb-4"
        />
        <InputEdit nameLabel="Email" value={localStorage.getItem("email")} />
        <InputAccount
          value="save"
          size="sm"
          class="bg-orange-900 h-10 mt-10 text-white w-[100%] uppercase"
        />

        <button
          onClick={handleButton}
          className="flex gap-2 justify-center items-center mt-9 text-sm text-[#862924] tracking-widest uppercase font-semibold cursor-pointer"
        >
          <Power size={24} />
          <p>log out</p>
        </button>
      </div>
    </>
  );
}
