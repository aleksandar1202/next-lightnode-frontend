import { useState } from 'react'
import type { NextPage } from 'next'
import { ClientLayout } from 'layouts/client'
import { LNCard } from 'components/common/card'

const StakingPoolPage: NextPage = () => {
  const [text, setText] = useState('');

  return (<ClientLayout>
    <div id="staking-pool" className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <LNCard title="APY">
          asdf
        </LNCard>
        <LNCard title="Your Rewards" variant="success">
          asdf
        </LNCard>
        <LNCard title="Your Stake" variant="primary">
          asdf
        </LNCard>
        <LNCard title="Monthly Profits" variant="danger">
          asdf
        </LNCard>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <LNCard>
          asdf
        </LNCard>
        <LNCard>
          asdf
        </LNCard>
      </div>
      <div className="">
        <LNCard>
          asdf
        </LNCard>
      </div>
    </div>
  </ClientLayout>)
}

export default StakingPoolPage
