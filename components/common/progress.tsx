import { useMemo } from "react";
import { StylingVariant, ResponsiveSize } from "common/types/components";
import { ThemeVariantToColor } from "common/constants/ui";

const heights = {
  large: 10,
  medium: 6,
  small: 4,
};

export const LNProgress = ({
  percentage,
  size = "medium",
  variant = "primary",
  animation = false,
}: {
  percentage: Number;
  size?: ResponsiveSize;
  variant?: StylingVariant;
  animation?: boolean;
}) => {
  const progressStyle = useMemo(() => {
    const bgColor = !variant ? "" : `bg-${ThemeVariantToColor[variant]}`;
    const height = `p-${heights[size] / 4}`;
    return `${bgColor} ${height} rounded-full duration-300 ${
      animation ? "animate-grow-up" : ""
    }`;
  }, [variant, size, animation]);

  const widthInPercentage = useMemo(() => `${percentage}%`, [percentage]);

  return (
    <div className="relative w-full rounded-full bg-white p-0 m-0">
      <div className="hidden p-4 p-2 p-1.5 bg-green bg-purple-dark"></div>
      <div style={{ width: widthInPercentage }}>
        <div className={progressStyle}></div>
      </div>
    </div>
  );
};
