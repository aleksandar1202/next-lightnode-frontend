import { useMemo } from "react";

export const LNChartTooltip = ({
  active,
  payload,
  label,
}: {
  active?: any;
  payload?: Array<{ value: string | number }>;
  label?: string;
}) => {
  const message = useMemo(
    () => payload?.map((p) => p.value).join(", "),
    [payload]
  );
  if (active && payload && payload.length) {
    return (
      <div className="bg-white-opacity-60 rounded-sm p-2 text-blue-800">
        <p className="">
          {label} : {message}
        </p>
      </div>
    );
  }

  return null;
};
