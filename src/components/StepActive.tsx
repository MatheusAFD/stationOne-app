import classNames from "classnames";

interface StepOrder {
  activeStep?: 1 | 2 | 3;
}

export function StepActive(props: StepOrder) {
  const isActiveStep = props.activeStep;
  return (
    <div className="flex  h-full items-center justify-center">
      <span
        className={classNames(
          "bg-[#e0e0e0] w-9 h-9 rounded-[50%] flex justify-center items-center",
          {
            "bg-[#fff] border-[3px] border-orange-900": isActiveStep === 1,
          }
        )}
      >
        {isActiveStep === 1 ? <>{}</> : <></>}
      </span>
      <div className=" w-28 h-4 bg-[#e0e0e0] -ml-0"></div>
      <span className="bg-[#e0e0e0] w-9 h-9 rounded-[50%] flex justify-center items-center -ml-1">
        {isActiveStep === 2 ? <>2</> : <></>}
      </span>
      <div className="w-28 h-4 bg-[#e0e0e0] -ml-1"></div>
      <span className="bg-[#e0e0e0] w-9 h-9 rounded-[50%] flex justify-center items-center -ml-1">
        {isActiveStep === 3 ? <>2</> : <></>}
      </span>
    </div>
  );
}
