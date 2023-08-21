interface StepOneProps {
  shopAddress?: string | undefined
  shopName: string | undefined
  openingHours: string | undefined
}

export function StepOne({ openingHours, shopName, shopAddress }: StepOneProps) {
  return (
    <section className="p-4">
      <div className="mb-8">
        <span className="text-sm text-[#9b9b9b]">Pick Up Location</span>
        <p>{shopAddress != null ? <>{shopAddress}</> : <>Online</>}</p>
      </div>

      <div className="mb-10">
        <span className="text-sm text-[#9b9b9b]">{shopName} Hours</span>
        <p>Daily: {openingHours}</p>
      </div>
      <div>
        <span className="text-sm text-[#9b9b9b]">Date & Time</span>
        <input type="datetime-local" name="" id="" className="block" />
      </div>
    </section>
  )
}
