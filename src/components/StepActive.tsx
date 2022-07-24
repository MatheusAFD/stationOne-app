import classNames from "classnames";
import { Check } from "phosphor-react";

interface StepOrder {
  activeStep?: any;
}

export function StepActive(props: StepOrder) {
  const activeStep = props.activeStep;
  return (
    <div className="flex  h-full items-center justify-center">
      <span
        className={classNames(
          "bg-[#e0e0e0] w-9 h-9 rounded-[50%] flex justify-center items-center z-10",
          {
            "bg-[#fff] border-[3px] border-orange-900": activeStep >= 0,
          }
        )}
      >
        {activeStep === 0 && (
          <>
            <p className="animate-pulse"> {activeStep + 1}</p>
          </>
        )}
        {activeStep > 0 && (
          <>
            <Check size={24} color="#049f19" weight="bold" />
          </>
        )}
      </span>
      <div
        className={classNames(" w-28 h-4 bg-[#e0e0e0] -ml-1 -z-[0]", {
          "!bg-orange-900 transform transition-all duration-500 ease-out scale-100":
            activeStep >= 1,
        })}
      ></div>
      <span
        className={classNames(
          "bg-[#e0e0e0] w-9 h-9 rounded-[50%] flex justify-center items-center -ml-1 z-10",
          {
            "bg-[#fff] border-[3px] border-orange-900": activeStep >= 1,
          }
        )}
      >
        {activeStep === 1 && (
          <>
            <p className="animate-pulse"> {activeStep + 1}</p>
          </>
        )}
        {activeStep > 1 && (
          <>
            <Check size={24} color="#049f19" weight="bold" />
          </>
        )}
      </span>
      <div
        className={classNames(" w-28 h-4 bg-[#e0e0e0] -ml-1 -z-[0]", {
          "!bg-orange-900 transform transition-all duration-500 ease-out scale-100":
            activeStep >= 2,
        })}
      ></div>
      <span
        className={classNames(
          "bg-[#e0e0e0] w-9 h-9 rounded-[50%] flex justify-center items-center -ml-1 z-10",
          {
            "bg-[#fff] border-[3px] border-orange-900": activeStep >= 2,
          }
        )}
      >
        {activeStep === 2 && (
          <>
            <p className="animate-pulse"> {activeStep + 1}</p>
          </>
        )}
        {activeStep > 2 && (
          <>
            <Check size={24} color="#049f19" weight="bold" />
          </>
        )}
      </span>
    </div>
  );
}
