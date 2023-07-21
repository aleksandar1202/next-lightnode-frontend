import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { BigNumber, ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ClientLayout } from "layouts/client";
import { LNCard } from "components/common/card";
import { LNInput } from "components/common/input";
import { LNProgress } from "components/common/progress";
import { LNChartTooltip } from "components/charts/customToolTip";
import { LNCheckBox } from "components/common/checkbox";
import { LNButton, LNSwitchButton } from "components/common/button";
import { Addresses } from "common/constants/contracts";
import LightNodeABI from "common/abis/lightnode";

const data = [
  { name: "Jan", uv: 0, pv: 170 },
  { name: "Feb", uv: 200, pv: 130 },
  { name: "Mar", uv: 50, pv: 160 },
  { name: "Apr", uv: 100, pv: 130 },
  { name: "May", uv: 50, pv: 170 },
  { name: "Jun", uv: 90, pv: 200 },
  { name: "Jul", uv: 150, pv: 120 },
  { name: "Aug", uv: 120, pv: 160 },
  { name: "Sep", uv: 100, pv: 130 },
  { name: "Oct", uv: 50, pv: 170 },
  { name: "Nov", uv: 100, pv: 160 },
  { name: "Dec", uv: 220, pv: 190 },
];

const StakingPoolPage: NextPage = () => {
  const [text, setText] = useState("");
  const [type, setType] = useState("Deposit");
  const [amount, setAmount] = useState("");
  const [permission, setPermission] = useState(false);

  const onChangeType = (isPositive: boolean) => {
    if (isPositive) {
      setType("Deposit");
    } else {
      setType("Compound");
    }
  };

  const onChangeAmount = (value: string) => {
    let newAmount: string[] | string = value
      .split(/ /)[0]
      .replace(/[^\d.]/g, "")
      .split(".");
    if (newAmount.length > 1) {
      newAmount = newAmount.shift() + "." + newAmount.join("");
    } else {
      newAmount = newAmount[0] as string;
    }
    setAmount(newAmount);
  };

  const onClickSubmit = async () => {
    const ethereum = (window as any).ethereum;
    const provider = new ethers.providers.Web3Provider(ethereum);
    if (!provider) {
      console.log("Error: No Provider Found...");
      return;
    }
    const signer = provider.getSigner();
    const balance: BigNumber = await provider.getBalance(
      await signer.getAddress()
    );

    if (balance.lt(ethers.utils.parseEther(`${parseFloat(amount)}`))) {
      toast.error(
        "Insufficient Balance. Please check your ETH balance and try again."
      );
      return;
    }
    const lightNodeContract = new ethers.Contract(
      Addresses.LightNode,
      LightNodeABI,
      signer
    );
    await lightNodeContract.submit(ethers.constants.AddressZero, {
      value: ethers.utils.parseEther(`${parseFloat(amount)}`),
    });
  };

  useEffect(() => {
    console.log(type, permission);
  }, [permission, type]);

  return (
    <ClientLayout>
      <ToastContainer
        position="top-right"
        closeOnClick
        hideProgressBar
        pauseOnHover
        autoClose={3000}
        theme="dark"
      />
      <div id="staking-pool" className="pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <LNCard title="APY">
            <p className="text-6xl mt-4 mb-2">45%</p>
            <p>Annual staking rewards</p>
          </LNCard>
          <LNCard title="Your Rewards" variant="success">
            <p className="flex items-center text-2xl mt-4 mb-2">
              <Image
                width={20}
                height={30}
                src="/assets/svgs/ETH.svg"
                alt="ETH"
              />
              <span className="ml-2">1 - $4,000</span>
            </p>
            <p className="mb-2">Next reward cycle: 18h 22m 10s</p>
            <LNProgress animation={true} variant="success" percentage={70} />
          </LNCard>
          <LNCard title="Your Stake" variant="primary">
            <p className="flex items-center text-2xl mt-4 mb-2">
              <Image
                width={20}
                height={30}
                src="/assets/svgs/ETH.svg"
                alt="ETH"
              />
              <span className="ml-2">32 - $112,000</span>
            </p>
            <p className="mb-2">Next reward cycle: 18h 22m 10s</p>
            <LNProgress animation={true} percentage={80} />
          </LNCard>
          <LNCard title="Monthly Profits" variant="danger">
            <p className="text-2xl mt-4 mb-2">$35,996</p>
            <p className="mb-2">Progress - 95%</p>
            <LNProgress animation={true} variant="danger" percentage={30} />
          </LNCard>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <LNCard>
            <p className="flex justify-between px-4 my-6">
              <span className="text-xl">Staking Pool</span>
              <span>(7.5% Staking Fee)</span>
            </p>
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#daaf41" stopOpacity={0.5} />
                    <stop offset="85%" stopColor="#daaf41" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  tick={{ fill: "white" }}
                  tickMargin={10}
                />
                <YAxis
                  domain={[0, (dataMax: number) => dataMax * 1.2]}
                  tick={{ fill: "white" }}
                  tickMargin={10}
                />
                <CartesianGrid strokeDasharray="8 8" vertical={false} />
                <Tooltip content={<LNChartTooltip />} />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#daaf41"
                  fillOpacity={1}
                  fill="url(#colorUv1)"
                />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8492a6"
                  dot={false}
                />
              </ComposedChart>
            </ResponsiveContainer>
            <div className="flex ml-12 mt-8 mb-4 items-center">
              <div className="w-6 h-6 bg-yellow rounded-full mr-2"></div>
              <span>Sales: 30,000 ETH</span>
              <div className="w-6 h-6 bg-gray rounded-full ml-8 mr-2"></div>
              <span>Rewards: 34.5 ETH</span>
            </div>
          </LNCard>
          <LNCard>
            <p className="flex justify-between px-4 my-6">
              <span className="text-xl">Monthly Profits</span>
            </p>
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1fb6ff" stopOpacity={0.5} />
                    <stop offset="85%" stopColor="#1fb6ff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  tick={{ fill: "white" }}
                  tickMargin={10}
                />
                <YAxis
                  domain={[0, (dataMax: number) => dataMax * 1.2]}
                  tick={{ fill: "white" }}
                  tickMargin={10}
                />
                <CartesianGrid strokeDasharray="8 8" vertical={false} />
                <Tooltip content={<LNChartTooltip />} />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#1fb6ff"
                  fillOpacity={1}
                  fill="url(#colorUv2)"
                />
              </ComposedChart>
            </ResponsiveContainer>
            <div className="flex ml-12 mt-8 mb-4 items-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mr-2"></div>
              <span>Monthly Profits</span>
            </div>
          </LNCard>
        </div>
        <div>
          <LNCard>
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
              <div className="lg:col-span-3">
                <LNSwitchButton
                  pos="Deposit"
                  neg="Compound"
                  onChange={onChangeType}
                  className="h-full"
                />
              </div>
              <div className="lg:col-span-5 flex items-center">
                <Image
                  width={20}
                  height={30}
                  src="/assets/svgs/ETH.svg"
                  className="w-6"
                  alt="ETH"
                />
                <LNInput
                  size="large"
                  className="ml-4 grow"
                  value={amount}
                  suffix={`You will receive: ${parseFloat(amount) || 0} stETH`}
                  onChange={(v: string) => onChangeAmount(v)}
                  placeHolder="Enter amount"
                />
              </div>
              <div className="flex items-center lg:col-span-2">
                <LNButton
                  title="Confirm"
                  className="w-full"
                  onClick={onClickSubmit}
                />
              </div>
            </div>
            <div className="flex justify-center mt-6 mb-2">
              <LNCheckBox onChange={setPermission} className="text-gray">
                <span>
                  I agree to{" "}
                  <a href="" className="text-yellow underline">
                    terms and conditions
                  </a>
                </span>
              </LNCheckBox>
            </div>
          </LNCard>
        </div>
      </div>
    </ClientLayout>
  );
};

export default StakingPoolPage;
