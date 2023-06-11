import { useState } from 'react'
import type { NextPage } from 'next'
import { LNLogo } from 'components/common/logo'
import { LNReward, LNRewardArgs } from 'components/reward'
import { LNSimpleBlog, LNSimpleBlogArgs } from 'components/simple-blog'

const ARR_REWARDS: Array<LNRewardArgs> = [{
  title:"Open doors",
  description:"Open the doors of PoS staking to anyone and everyone, regardless of financial or social status",
  imgSrc:"/assets/images/Group-3.png"
}, {
  title:"Max yield",
  description:"Create the highest yield, lowest fee-for-profit staking service",
  imgSrc:"/assets/images/Group-4.png"
}, {
  title:"Community",
  description:"Be the most community-centric staking pool",
  imgSrc:"/assets/images/Group-5.png"
}, {
  title:"All in one",
  description:"Eventually allow users to stake any major PoS coin. Effectively creating a one-stop service to allow users to deposit and tokenize their coins",
  imgSrc:"/assets/images/Group-3.png"
}, {
  title:"DeFi",
  description:"Allow users to maximize their yield using third-party DeFi protocols across the network",
  imgSrc:"/assets/images/Group-4.png"
}, {
  title:"API first",
  description:"Extensible, API-first approach tapping into major providers to ensure a friendly user experience",
  imgSrc:"/assets/images/Group-5.png"
}]

const ARR_BLOGS: Array<LNSimpleBlogArgs> = [{
  title: 'WHAT IS LIGHTNODE?',
  btnTitle: 'Link to Whitepaper',
  side: 'ltr',
  imgSrc:'/assets/images/v1.png',
  noBorder: true,
  description: 'Lightnode is a semi-centralized staking service that maximizes the interest users can earn on Proof of Stake tokens. Ethereum will be the first asset that LightNode supports.'
}, {
  title: 'THE MARKET TODAY',
  btnTitle: 'Read more',
  side: 'rtl',
  imgSrc:'/assets/images/v2.png',
  noBorder: false,
  description: 'As Decentralized finance (DeFi) continues to explode, more and more investors are actively adopting innovative mechanisms to earn rewards, mitigate volatility, and multiply their crypto wealth. Staking is one of the most secure and profitable ways to achieve sustained growth while fully retaining the ownership of staked digital assets.'
}, {
  title: 'LIGHTNODE SHARED',
  btnTitle: 'Learn more',
  side: 'ltr',
  imgSrc:'/assets/images/v3.png',
  noBorder: false,
  description: 'For users with less than 32 ETH, LightNode Shared offers a network of validators on behalf of stakers who are utilizing the Pool. Once the 32 ETH threshold is met from the collective deposits, a new validator is created and added to LightNode Shared to earn rewards. The stakers are paid out proportionally to their share in the pool.'
}, {
  title: 'LIGHTNODE SOLO',
  btnTitle: 'Learn more',
  side: 'rtl',
  imgSrc:'/assets/images/Group-76.png',
  noBorder: false,
  description: 'For users with greater than 32 ETH, Lightnode Solo intends to make staking and running a personal validator as simple as possible without the difficulties of maintaining and operating your own server. Our semi-centralized approach provides users with greater security and convenience.'
}, {
  title: 'ECONOMICS AND SPECIFICATIONS',
  btnTitle: 'Read more',
  side: 'ltr',
  imgSrc:'/assets/images/v5.png',
  noBorder: false,
  description: 'The LightNode ecosystem is powered by four different tokens that allow users to access the products and features of the LightNode staking infrastructure'
}, {
  title: 'ROADMAP',
  btnTitle: 'Learn more',
  side: 'rtl',
  imgSrc:'/assets/images/v6.png',
  noBorder: false,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}]

const LandingPage: NextPage = () => {
  const [rewards, setRewards] = useState<Array<LNRewardArgs>>(ARR_REWARDS || [])
  const [blogs, setBlogs] = useState<Array<LNSimpleBlogArgs>>(ARR_BLOGS || [])
  

  return (<div id="lightnode-landing-page" className="">
    <section className="relative text-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video className="w-full h-full object-cover" src="/assets/video/video-bg.mp4" autoPlay muted playsInline loop />
      </div>
      <div className="absolute inset-0 landing-bg-overlay"></div>
      <LNLogo size="large"/>
      <p className="relative text-7xl md:text-9xl font-corporate text-gray-light uppercase leading-70p mt-12 md:mt-20 mb-8 md:mb-12">
        Do more<br/>Width your ETH
      </p>
      <p className="relative text-2xl md:text-3xl uppercase text-yellow-dark font-light mb-16 md:mb-20">
        Make stake happen
      </p>
      <button className="relative uppercase btn btn-yellow">Start staking</button>
    </section>
    <section className="text-center max-w-7xl mx-auto px-6">
      <p className="uppercase text-gray-light text-xl pt-24 mb-6">Rewards / Benefits</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {rewards.map((r, ri) => <LNReward key={ri} title={r.title} description={r.description} imgSrc={r.imgSrc} />)}
      </div>
    </section>
    <section className="py-24">
      <div className="grid grid-cols-1">
        {blogs.map((b, bi) => <LNSimpleBlog key={bi} title={b.title} description={b.description}
          side={b.side} btnTitle={b.btnTitle} imgSrc={b.imgSrc} noBorder={b.noBorder} />)}
      </div>
    </section>
    <section>
      
    </section>
  </div>)
}

export default LandingPage
