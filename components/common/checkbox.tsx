import { useMemo, ReactNode, ChangeEvent } from "react";
import { LNInputArgs } from "common/types/components";

export const LNCheckBox = ({
  children,
  onChange = () => {},
  className,
}: {
  children: ReactNode;
  onChange?: Function;
  className?: string;
}) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className={`checkbox-wrapper ${className}`}>
      <input type="checkbox" onChange={handler} />
      {children}
      <span className="checkmark"></span>
    </label>
  );
};
