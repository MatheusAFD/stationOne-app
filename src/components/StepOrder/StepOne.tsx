interface StepOneProps {
  shopAddress?: any;
  shopName: any;
  openingHours: any;
}

export function StepOne(props: StepOneProps) {
  return (
    <section className="p-4">
      <div className="mb-8">
        <span className="text-sm text-[#9b9b9b]">Pick Up Location</span>
        <p>
          {props.shopAddress != null ? <>{props.shopAddress}</> : <>Online</>}
        </p>
      </div>

      <div className="mb-10">
        <span className="text-sm text-[#9b9b9b]">{props.shopName} Hours</span>
        <p>Daily: {props.openingHours}</p>
      </div>
      <div>
        <span className="text-sm text-[#9b9b9b]">Date & Time</span>
        <input type="datetime-local" name="" id="" className="block" />
      </div>
    </section>
  );
}
