import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./animation.json";
import { useNavigate } from "react-router-dom";

export function StepSucess() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/order");
  }, 8000);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Player
          keepLastFrame
          autoplay
          src={animationData}
          style={{ height: "300px", width: "300px" }}
          onEvent={(event) => {
            if (event == "complete") setShow(true);
          }}
        />
        {show && (
          <>
            <h1 className="text-lg text-[#424242] animate-bounce">
              Pedido realizado com sucesso!
            </h1>
          </>
        )}
      </div>
    </>
  );
}
