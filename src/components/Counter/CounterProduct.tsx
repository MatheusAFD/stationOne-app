import { useEffect } from "react";
import { Minus, Plus } from "phosphor-react";

interface CounterProps {
  set: any;
  setted: any;
  id_item: string;
}

export function CounterProduct(props: CounterProps) {
  useEffect(() => {
    saveProduct();
  }, [props.setted]);

  function saveProduct() {
    sessionStorage.setItem("id", props.id_item);
    sessionStorage.setItem("quantity", `${props.setted}`);
  }

  function increment() {
    props.set(props.setted + 1);
  }

  function decrement() {
    {
      props.setted <= 1 ? <></> : props.set(props.setted - 1);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="mb-5 text-sm text-[#862924]">Quantidade</p>
      <div className="flex gap-5 ">
        <button>
          <Minus size={20} className="cursor-pointer" onClick={decrement} />
        </button>
        {props.setted}
        <button>
          <Plus size={20} className="cursor-pointer" onClick={increment} />
        </button>
      </div>
    </div>
  );
}
