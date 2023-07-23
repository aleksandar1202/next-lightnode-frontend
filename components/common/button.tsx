import { useState, useEffect, useMemo, MouseEvent, Fragment } from "react";
import { LNButtonArgs } from "common/types/components";

export const LNButton = ({
  variant = "primary",
  style = "filled",
  size = "medium",
  title,
  onClick = () => {},
  className = "",
}: LNButtonArgs) => {
  const classNames = useMemo(() => {
    const variantClassName = `btn-${variant}`;
    const styleClassName = `btn-${style}`;
    const sizeClassName =
      size === "large"
        ? "py-5 px-16"
        : size === "small"
        ? "py-1.5 px-4"
        : "py-3 px-8";

    return `btn ${variantClassName} ${styleClassName} ${sizeClassName} ${className}`;
  }, [className, size, style, variant]);

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    onClick();
  };

  return (
    <button className={classNames} onClick={onClickHandler}>
      {title}
    </button>
  );
};

export const LNSwitchButton = ({
  pos,
  neg,
  onChange,
  className,
}: {
  pos: string;
  neg: string;
  onChange: Function;
  className: string;
}) => {
  const [isPositive, setIsPositive] = useState(true);

  useEffect(() => {
    onChange(isPositive);
  }, [isPositive, onChange]);

  return (
    <Fragment>
      <button
        className={`w-3/6 py-3 ${
          isPositive ? "bg-gray cursor-not-allowed" : "bg-black"
        } rounded-l ${className}`}
        onClick={() => setIsPositive(true)}
      >
        {pos}
      </button>
      <button
        className={`w-3/6 py-3 ${
          !isPositive ? "bg-gray cursor-not-allowed" : "bg-black"
        } rounded-r ${className}`}
        onClick={() => setIsPositive(false)}
      >
        {neg}
      </button>
    </Fragment>
  );
};
