import { useMemo } from "react";
import Image from "next/image";
import { LNCard } from "components/common/card";
import { LNButton } from "components/common/button";

export const LNFarmingPoolCard = ({
  title,
  data,
}: {
  title: string;
  data: Array<{ key: string; value: string }>;
}) => {
  const columnStyle = (colNum: number) => {
    const originStyle = "flex justify-between py-4";
    if (data.length - 1 !== colNum) {
      return `${originStyle} border-b border-slate-500`;
    }
    return originStyle;
  };

  return (
    <LNCard>
      <p className="flex items-center text-xl mt-4 mb-2">
        <Image width={20} height={30} src="/assets/svgs/ETH.svg" alt="ETH" />
        <span className="ml-2">{title}</span>
      </p>
      {data.map((d, di) => (
        <p key={di} className={columnStyle(di)}>
          <span className="text-slate-500">{d.key}</span>
          <span>{d.value}</span>
        </p>
      ))}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <LNButton title="Guide" />
        <LNButton title="Add Liquidity" />
      </div>
    </LNCard>
  );
};
