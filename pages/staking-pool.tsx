import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import {
  ResponsiveContainer,
  ComposedChart, Area, Line,
  Tooltip, CartesianGrid,
  XAxis, YAxis
} from 'recharts';
import { ClientLayout } from 'layouts/client'
import { LNCard } from 'components/common/card'
import { LNProgress } from 'components/common/progress'
import { LNChartTooltip } from 'components/charts/customToolTip'
import { LNSwitchButton } from 'components/common/button'

const data = [
  { name: 'Jan', uv: 0, pv: 170 },
  { name: 'Feb', uv: 200, pv: 130 },
  { name: 'Mar', uv: 50, pv: 160 },
  { name: 'Apr', uv: 100, pv: 130 },
  { name: 'May', uv: 50, pv: 170 },
  { name: 'Jun', uv: 90, pv: 200 },
  { name: 'Jul', uv: 150, pv: 120 },
  { name: 'Aug', uv: 120, pv: 160 },
  { name: 'Sep', uv: 100, pv: 130 },
  { name: 'Oct', uv: 50, pv: 170 },
  { name: 'Nov', uv: 100, pv: 160 },
  { name: 'Dec', uv: 220, pv: 190 }
]

const StakingPoolPage: NextPage = () => {
  const [text, setText] = useState('')
  const [type, setType] = useState('Deposit')

  const onChangeType = (isPositive: boolean) => {
    if (isPositive) {
      setType('Deposit')
    } else {
      setType('Compound')
    }
  }

  useEffect(() => {
    console.log(type)
  }, [type])

  return (<ClientLayout>
    <div id="staking-pool" className="">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <LNCard>
          <p className="flex justify-between px-4 my-8">
            <span className="text-xl">Staking Pool</span>
            <span>(7.5% Staking Fee)</span>
          </p>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#daaf41" stopOpacity={0.5}/>
                  <stop offset="85%" stopColor="#daaf41" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name"  tick={{ fill: 'white' }} tickMargin={10}/>
              <YAxis domain={[0, (dataMax: number) => (dataMax * 1.2)]} tick={{ fill: 'white' }} tickMargin={10}/>
              <CartesianGrid strokeDasharray="8 8" vertical={false}/>
              <Tooltip content={<LNChartTooltip />}/>
              <Area type="monotone" dataKey="uv" stroke="#daaf41" fillOpacity={1} fill="url(#colorUv1)" />
              <Line type="monotone" dataKey="pv" stroke="#8492a6" dot={false}/>
            </ComposedChart>
          </ResponsiveContainer>
          <div className="flex ml-12 mt-10 mb-6 items-center">
            <div className="w-6 h-6 bg-yellow rounded-full mr-2"></div>
            <span>Sales: 30,000 ETH</span>
            <div className="w-6 h-6 bg-gray rounded-full ml-8 mr-2"></div>
            <span>Rewards: 34.5 ETH</span>
          </div>
        </LNCard>
        <LNCard>
          <p className="flex justify-between px-4 my-8">
            <span className="text-xl">Monthly Profits</span>
          </p>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1fb6ff" stopOpacity={0.5}/>
                  <stop offset="85%" stopColor="#1fb6ff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name"  tick={{ fill: 'white' }} tickMargin={10}/>
              <YAxis domain={[0, (dataMax: number) => (dataMax * 1.2)]} tick={{ fill: 'white' }} tickMargin={10}/>
              <CartesianGrid strokeDasharray="8 8" vertical={false}/>
              <Tooltip content={<LNChartTooltip />}/>
              <Area type="monotone" dataKey="uv" stroke="#1fb6ff" fillOpacity={1} fill="url(#colorUv2)" />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="flex ml-12 mt-10 mb-6 items-center">
            <div className="w-6 h-6 bg-blue rounded-full mr-2"></div>
            <span>Monthly Profits</span>
          </div>
        </LNCard>
      </div>
      <div className="">
        <LNCard>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <LNSwitchButton pos="Deposit" neg="Compound" onChange={onChangeType}/>
            </div>
            <div className="md:col-span-2">Input box</div>
            <div>Confirm</div>
          </div>
        </LNCard>
      </div>
    </div>
  </ClientLayout>)
}

export default StakingPoolPage
