import { useState } from 'react'
import type { NextPage } from 'next'
import { ClientLayout } from 'layouts/client'

const StakingPoolPage: NextPage = () => {
  const [text, setText] = useState('');

  return (<ClientLayout>
    <div id="staking-pool" className="">
      Staking Pool
    </div>
  </ClientLayout>)
}

export default StakingPoolPage
