import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";

import { ClientLayout } from "layouts/client";
import { LNCard } from "components/common/card";
import { LNProgress } from "components/common/progress";
import { LNFarmingPoolCard } from "components/cards/farmingPool";
import { getPoolImmutables } from "common/utils/uniswap";

const poolData = [
  { key: "Pool Apy", value: "15.4%" },
  { key: "Your Liquidity", value: "$12,000" },
  { key: "Active Liquidity", value: "5%" },
  { key: "Earned Rewards", value: "$200" },
  { key: "Earned Feeds", value: "$150" },
];

const poolAddress = "";

const FarmingPage: NextPage = () => {
  const [text, setText] = useState("");

  const poolImmutables = async () => {
    const poolImmutables = await getPoolImmutables(poolAddress);
  }

  return (
    <ClientLayout>
      <div id="farming" className="pb-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <LNFarmingPoolCard
            title="Uniswap v3 ETH - slETH Pool"
            data={poolData}
          />
          {/*<LNFarmingPoolCard title="Uniswap v3 ETH - sETH Pool" data={poolData} />
        <LNFarmingPoolCard title="Uniswap v3 ETH - sETH Pool" data={poolData} />
        <LNFarmingPoolCard title="Uniswap v3 ETH - sETH Pool" data={poolData} />
        <LNFarmingPoolCard title="Uniswap v3 ETH - sETH Pool" data={poolData} />*/}
        </div>
      </div>
    </ClientLayout>
  );
};

export default FarmingPage;
