import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

interface StepTwoProps {
  object?: any;
}

export function StepTwo(props: StepTwoProps) {
  const [selected, setSelected] = useState(props.object[0]);

  return (
    <section>
      {props.object?.map((item: any) => {
        return (
          <div
            key={item.id}
            className="flex flex-col items-center py-4  last:mb-24"
          >
            <div className="w-[362px] h-20 shadow rounded">
              <input type="radio" name="" id="" />a
              <div className="flex justify-between p-3 text-[#424242]">
                <div>
                  <h3 className="text-base font-semibold">{item.nome}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
                <span className="text-sm">R$ {item.price}</span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
