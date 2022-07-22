import { Header } from "../../components/Header";
import { SetpsForm } from "../../components/StepsForm";

export function StartOrder() {
  return (
    <>
      <Header hasBack={true} title="Set Pickup Time" />
      <SetpsForm />
    </>
  );
}
