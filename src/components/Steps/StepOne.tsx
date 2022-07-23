export function StepOne() {
  return (
    <section className="p-4">
      <div className="mb-8">
        <span className="text-sm text-[#9b9b9b]">Pick Up Location</span>
        <p>R. Cônego Valadão, 725 - Gopouva, Guarulhos - SP, 07040-00</p>
      </div>

      <div className="mb-10">
        <span className="text-sm text-[#9b9b9b]">Patissier Hours</span>
        <p>Daily: </p>
      </div>
      <div>
        <span className="text-sm text-[#9b9b9b]">Date & Time</span>
        <input type="datetime-local" name="" id="" className="block" />
      </div>
    </section>
  );
}