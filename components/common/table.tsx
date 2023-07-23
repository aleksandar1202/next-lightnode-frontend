import { ReactNode } from "react";
import { KeyValueMapping, Mapping } from "common/types/common";

export const LNTable = ({
  headers,
  data,
  rowBuilder,
}: {
  headers: Array<KeyValueMapping>;
  data: Array<Mapping>;
  rowBuilder: Function;
}) => {
  return (
    <table className="w-full">
      <thead className="text-gray border-b-2">
        <tr>
          {headers.map((h, hi) => (
            <th className="text-left pb-2" key={hi}>
              {h.value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y">
        {data.map((d, di) => rowBuilder(d, di))}
      </tbody>
    </table>
  );
};
