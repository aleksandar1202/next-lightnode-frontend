import { useMemo } from "react";
import { LNInputArgs } from "common/types/components";

export const LNInput = ({
  size = "medium",
  value,
  placeHolder = "",
  onChange,
  className,
  prefix,
  suffix,
}: LNInputArgs) => {
  const classes = useMemo(() => {
    let responsiveClasses = "";
    switch (size) {
      case "large":
        responsiveClasses = "py-2.5 px-5 text-xl";
        break;
      case "small":
        responsiveClasses = "py-1 px-2 text-base";
        break;
      default:
        responsiveClasses = "py-1.5 px-3.5 text-lg";
        break;
    }
    return `border rounded border-gray ${responsiveClasses} ${className} flex items-center`;
  }, [size, className]);

  const inputClasses =
    "bg-transparent text-gray-light font-light focus:outline-0 grow w-1";

  return (
    <div className={classes}>
      {prefix ? <span className="mr-2 text-sm">{prefix}</span> : null}
      <input
        className={inputClasses}
        placeholder={placeHolder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {suffix ? <span className="ml-2 text-sm">{suffix}</span> : null}
    </div>
  );
};
