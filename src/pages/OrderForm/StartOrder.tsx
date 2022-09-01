import { useGetShopInfoQuery } from "../../graphql/generated";
import { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonSetps } from "../../components/ButtonSteps";
import { Header } from "../../components/Header";
import { StepActive } from "../../components/StepActive";
import { StepOne } from "../../components/Steps/StepOne";
import { StepThree } from "../../components/Steps/StepThree";
import { StepTwo } from "../../components/Steps/StepTwo";

export function StartOrder() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [step, setStep] = useState(0);
  const [message] = useState([
    "SET PICKUP TIME",
    "SET PRODUCT",
    "CONFIRM YOUR ORDER",
    "SUCESS",
  ]);

  const { data } = useGetShopInfoQuery({
    variables: {
      slug,
    },
  });

  function handleButton(e: FormEvent) {
    e?.preventDefault();
    if (step <= 2) {
      setStep(step + 1);
    }
  }

  function handleButtonBack() {
    if (step > 0) {
      setStep(step - 1);
    } else {
      navigate(-1);
    }
  }

  return (
    <>
      <Header
        hasBack={true}
        title={message[step]}
        returnNav={handleButtonBack}
      />

      <div className="w-[390x] h-16 bg-[#f5f5f5] -z-10 ">
        <StepActive activeStep={step} />
      </div>
      <div className="flex justify-center">
        {step === 0 && (
          <StepOne
            shopAddress={data?.shops[0].address}
            shopName={data?.shops[0].name}
            openingHours={data?.shops[0].openingHours}
          />
        )}
        {step === 1 && <StepTwo object={data?.shops[0].products} />}
        {step === 2 && <StepThree />}
      </div>

      {step < 2 && (
        <ButtonSetps nameStep={message[step]} onClick={handleButton} />
      )}
    </>
  );
}
