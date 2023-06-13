import { useState } from 'react'
import type { NextPage } from 'next'
import { ClientLayout } from 'layouts/client'

const SoloStakingPage: NextPage = () => {
  const [text, setText] = useState('');

  return (<ClientLayout>
    <div id="solo-staking" className="">
      Solo Staking
    </div>
  </ClientLayout>)
}

export default SoloStakingPage
