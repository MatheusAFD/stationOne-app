import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircle, Minus, Plus } from "phosphor-react";
import { CounterProduct } from "../CounterProduct";

interface StepTwoProps {
  object?: any;
}

export function StepTwo(props: StepTwoProps) {
  const [selected, setSelected] = useState(props.object[0]);
  const [counterProduct, setCounterProduct] = useState(1);

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>

          <div className="space-y-2">
            {props.object?.map((item: any) => (
              <RadioGroup.Option
                key={item.name}
                value={item}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-900"
                      : ""
                  }
                  ${checked ? "bg-[#852a23]  text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {item.nome}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span>R$ {item.price}</span>{" "}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckCircle className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      <CounterProduct
        setted={counterProduct}
        set={setCounterProduct}
        id_item={selected.id}
      />
      ;
    </div>
  );
}
