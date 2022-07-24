import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./animation.json";

export function StepSucess() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
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
              Cadastro realizado com sucesso!
            </h1>
          </>
        )}
      </div>
    </>
  );
}
