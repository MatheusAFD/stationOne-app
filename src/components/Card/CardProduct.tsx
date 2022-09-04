interface CardProductProps {
  id: string;
  name: string;
  price: number;
  description: any;
  deliveryIn: any;
  img: string;
}

export function CardProduct(props: CardProductProps) {
  return (
    <div
      key={props.id}
      className="w-[95%] max-w-[410px] flex flex-col items-center mb-7 last:mb-24 lg:last:mb-7"
    >
      <p className="font-semibold text-sm text-[#9E9E9E] place-self-start mb-3">
        {props.deliveryIn}
      </p>
      <div className="w-full h-[255px] shadow rounded">
        <img
          src={props.img}
          alt=""
          className="h-48 w-full object-cover "
          width={350}
          height={190}
        />

        <div className="flex justify-between p-3 text-[#424242]">
          <div>
            <h3 className="text-base font-semibold">{props.name}</h3>
            <p className="text-sm">{props.description}</p>
          </div>
          <span className="text-sm place-self-start px-2 bg-orange-900 rounded-md text-white font-semibold ">
            R$ {props.price}
          </span>
        </div>
      </div>
    </div>
  );
}
