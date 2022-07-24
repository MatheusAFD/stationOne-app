import { Header } from "../../components/Header";

import { FormEvent, useState } from "react";
import { ButtonSetps } from "../../components/ButtonSteps";
import { StepActive } from "../../components/StepActive";
import { StepOne } from "../../components/Steps/StepOne";
import { StepThree } from "../../components/Steps/StepThree";
import { StepTwo } from "../../components/Steps/StepTwo";
import { StepSucess } from "../../components/Steps/StepSucess";

export function StartOrder() {
  const [step, setStep] = useState(0);
  const [message] = useState([
    "SET PICKUP TIME",
    "SET LOCATION",
    "CONFIRM YOUR DATA",
    "SUCESS",
  ]);

  function handleButton(e: FormEvent) {
    e?.preventDefault();
    if (step <= 2) {
      setStep(step + 1);
    }
  }

  return (
    <>
      <Header hasBack={true} title={message[step]} />
      <div className="w-[390x] h-16 bg-[#f5f5f5] -z-10 ">
        <StepActive activeStep={step} />
      </div>
      <div className="flex justify-center">
        {step === 0 && <StepOne />}
        {step === 1 && <StepTwo />}
        {step === 2 && <StepThree />}
        {step === 3 && <StepSucess />}
      </div>

      <ButtonSetps nameStep={message[step]} onClick={handleButton} />
    </>
  );
}
