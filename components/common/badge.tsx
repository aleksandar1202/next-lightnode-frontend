import { ReactNode, useMemo } from "react";
import { StylingVariant } from "common/types/components";

export const LNBadge = ({
  variant = "primary",
  text,
  children,
}: {
  text: String;
  variant?: StylingVariant;
  children: ReactNode;
}) => {
  const styles = useMemo(() => {
    const defaultStyle =
      "rounded-full text-xs font-bold absolute -top-2.5 -right-2.5 " +
      "w-5 h-5 flex items-center justify-center hover:cursor-pointer";
    switch (variant) {
      case "secondary":
        return defaultStyle + " text-blue-800 bg-yellow";
      case "warning":
        return defaultStyle + " text-blue-800 bg-yellow";
      case "danger":
        return defaultStyle + " text-blue-800 bg-yellow";
      case "info":
        return defaultStyle + " text-blue-800 bg-yellow";
      case "primary":
      default:
        return defaultStyle + " text-blue-800 bg-yellow";
    }
  }, [variant]);
  return (
    <div className="relative">
      {children}
      {!!text ? <span className={styles}>{text}</span> : null}
    </div>
  );
};
