import { ReactNode, Fragment } from "react";
import Image from "next/image";
import { LNTable } from "components/common/table";
import { KeyValueMapping, Mapping } from "common/types/common";

const tableHeaders: Array<KeyValueMapping> = [
  { key: "balance", value: "Balance" },
  { key: "apy", value: "Current APY" },
  { key: "duration", value: "Duration" },
  { key: "status", value: "Status" },
  { key: "actions", value: "Actions" },
];

const RowBuilders: { [key: string]: Function } = {
  balance: ({
    value,
    currency = "$",
  }: {
    value: number;
    currency: string;
  }): ReactNode => (
    <span>
      {currency}
      {value}
    </span>
  ),
  apy: ({ value }: { value: number }): ReactNode => <span>{value}%</span>,
  duration: ({ value }: { value: Date }): ReactNode => (
    <span>{`${value.getHours()}h ${value.getMinutes()}m ${value.getSeconds()}s`}</span>
  ),
  status: ({ value }: { value: boolean }): ReactNode => (
    <span
      className={value ? "uppercase text-green" : "uppercase text-purple-dark"}
    >
      {value ? "ACTIVE" : "INACTIVE"}
    </span>
  ),
  actions: ({ row }: { row: Mapping }): ReactNode => (
    <div className="flex">
      <div
        className="hover:cursor-pointer"
        onClick={() => console.log("Settings", row)}
      >
        <Image
          src="/assets/svgs/Settings.svg"
          width={28}
          height={28}
          alt="Validation Setting"
        />
      </div>
      <div
        className="ml-2 hover:cursor-pointer"
        onClick={() => console.log("Delete", row)}
      >
        <Image
          src="/assets/svgs/Delete.svg"
          width={28}
          height={28}
          alt="Delete Validation"
        />
      </div>
    </div>
  ),
};

export const LNFarmingPoolTable = ({ data }: { data: Array<Mapping> }) => {
  const rowBuilder = (row: Mapping, rowIndex: number) => {
    return (
      <tr key={rowIndex}>
        {tableHeaders.map((h, hi) => (
          <td key={hi} className="py-4">
            {RowBuilders[h.key]({ row, key: h.key, value: row[h.key] })}
          </td>
        ))}
      </tr>
    );
  };

  return <LNTable headers={tableHeaders} data={data} rowBuilder={rowBuilder} />;
};
