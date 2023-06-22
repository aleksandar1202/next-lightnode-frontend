import { useState } from 'react'
import type { NextPage } from 'next'
import { ClientLayout } from 'layouts/client'
import { LNCard } from 'components/common/card'
import { LNProgress } from 'components/common/progress'

const SoloStakingPage: NextPage = () => {
  const [text, setText] = useState('');

  return (<ClientLayout>
    <div id="solo-staking">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <LNCard title="APY">
          <p className="text-6xl mt-4 mb-2">45%</p>
          <p>Annual staking rewards</p>
        </LNCard>
        <LNCard title="Your Rewards" variant="success">
          <p className="flex items-center text-2xl mt-4 mb-2">
            <img src="/assets/svgs/ETH.svg" />
            <span className="ml-2">1 - $4,000</span>
          </p>
          <p className="mb-2">Next reward cycle: 18h 22m 10s</p>
          <LNProgress variant="success" percentage={70} />
        </LNCard>
        <LNCard title="Your Stake" variant="primary">
          <p className="flex items-center text-2xl mt-4 mb-2">
            <img src="/assets/svgs/ETH.svg" />
            <span className="ml-2">32 - $112,000</span>
          </p>
          <p className="mb-2">Next reward cycle: 18h 22m 10s</p>
          <LNProgress percentage={80} />
        </LNCard>
        <LNCard title="Monthly Profits" variant="danger">
          <p className="text-2xl mt-4 mb-2">
            $35,996
          </p>
          <p className="mb-2">Progress - 95%</p>
          <LNProgress variant="danger" percentage={30} />
        </LNCard>
      </div>
    </div>
  </ClientLayout>)
}

export default SoloStakingPage
