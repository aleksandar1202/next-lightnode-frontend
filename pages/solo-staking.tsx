import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { ClientLayout } from 'layouts/client'
import { LNCard } from 'components/common/card'
import { LNProgress } from 'components/common/progress'
import { LNCheckBox } from 'components/common/checkbox'
import { LNInput } from 'components/common/input'
import { LNButton } from 'components/common/button'

const SoloStakingPage: NextPage = () => {
  const [amount, setAmount] = useState('')
  const [eth, setEth] = useState('')
  const [text, setText] = useState('')
  const [permission, setPermission] = useState(false)

  return <ClientLayout>
    <div id="solo-staking">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <LNCard title="APY">
          <p className="text-6xl mt-4 mb-2">45%</p>
          <p>Annual staking rewards</p>
        </LNCard>
        <LNCard title="Your Rewards" variant="success">
          <p className="flex items-center text-2xl mt-4 mb-2">
            <Image width={20} height={30} src="/assets/svgs/ETH.svg" alt="ETH"/>
            <span className="ml-2">1 - $4,000</span>
          </p>
          <p className="mb-2">Next reward cycle: 18h 22m 10s</p>
          <LNProgress variant="success" percentage={70} />
        </LNCard>
        <LNCard title="Your Stake" variant="primary">
          <p className="flex items-center text-2xl mt-4 mb-2">
            <Image width={20} height={30} src="/assets/svgs/ETH.svg" alt="ETH"/>
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
      <div className="grid grid-cols-1 mb-4">
        <LNCard>
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
            <div className="lg:col-span-3 flex items-center">
              <LNInput size="large" className="mr-4 grow" value={amount}
                suffix="Validator Node"
                onChange={(v: string) => setAmount(v)} placeHolder="Amount"/>
              <Image width={29} height={16} src="/assets/svgs/arrow.svg" className="w-6" alt="Arrow"/>
            </div>
            <div className="lg:col-span-5 flex items-center">
              <Image width={20} height={30} src="/assets/svgs/ETH.svg" className="w-6" alt="ETH"/>
              <LNInput size="large" className="ml-4 grow" value={eth}
                suffix="32ETH = 1 Validator Node"
                onChange={(v: string) => setEth(v)} placeHolder="Cost ETH"/>
            </div>
            <div className="flex items-center lg:col-span-2">
              <LNButton title="Confirm" className="w-full"/>
            </div>
          </div>
          <div className="flex justify-center mt-6 mb-2">
            <LNCheckBox onChange={setPermission} className="text-gray">
              <span>I agree to <a href="" className="text-yellow underline">terms and conditions</a></span>
            </LNCheckBox>
          </div>
        </LNCard>
      </div>
      <div className="grid grid-cols-1 ">
        <LNCard title="Your Validators" titlePos="left">
          <div className="mt-4">
            table
          </div>
        </LNCard>
      </div>
    </div>
  </ClientLayout>
}

export default SoloStakingPage
