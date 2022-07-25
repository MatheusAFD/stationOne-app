import { Header } from "../../components/Header";

import { FormEvent, useState } from "react";
import { ButtonSetps } from "../../components/ButtonSteps";
import { StepActive } from "../../components/StepActive";
import { StepOne } from "../../components/Steps/StepOne";
import { StepThree } from "../../components/Steps/StepThree";
import { StepTwo } from "../../components/Steps/StepTwo";
import { StepSucess } from "../../components/Steps/StepSucess";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

interface GET_RESPONSE_SHOP_QUERY {
  shops: {
    name: String;
    address: String;
    openingHours: string;
    products: {
      nome: string;
      price: number;
      description: string;
    };
  }[];
}

const GET_SHOP_INFO_QUERY = gql`
  query MyQuery($slug: String) {
    shops(where: { slugFood: $slug }) {
      name
      address
      openingHours
      products {
        nome
        price
        description
        id
      }
    }
  }
`;

export function StartOrder() {
  const [step, setStep] = useState(0);
  const [message] = useState([
    "SET PICKUP TIME",
    "SET PRODUCT",
    "CONFIRM YOUR DATA",
    "SUCESS",
  ]);

  const { slug } = useParams();
  const { data } = useQuery<GET_RESPONSE_SHOP_QUERY>(GET_SHOP_INFO_QUERY, {
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

  return (
    <>
      <Header hasBack={true} title={message[step]} />
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
        {step === 3 && <StepSucess />}
      </div>

      <ButtonSetps nameStep={message[step]} onClick={handleButton} />
    </>
  );
}
