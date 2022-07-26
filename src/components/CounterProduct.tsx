import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

interface CounterProps {
  set: any;
  setted: any;
  id_item: string;
  quantity: number;
}

export function CounterProduct(props: CounterProps) {
  function saveProduct() {
    sessionStorage.setItem("id", props.id_item);
    sessionStorage.setItem("quantity", `${props.quantity}`);
  }

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="mb-5 text-sm text-[#862924]">Quantidade</p>
      <div className="flex gap-5 ">
        <Minus
          size={20}
          className="cursor-pointer"
          onClick={() => {
            if (props.setted < 2) {
              props.set((props.setted = 0));
            }
            props.set(props.setted - 1);
            saveProduct();
          }}
        />
        {props.setted - 1}
        <Plus
          size={20}
          className="cursor-pointer"
          onClick={() => {
            props.set(props.setted + 1);
            saveProduct();
          }}
        />
      </div>
    </div>
  );
}
