import { useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { LNButton } from 'components/common/button'
import { LNLogo } from 'components/common/logo'
import { LNReward } from 'components/reward'
import { LNSimpleBlog } from 'components/simple-blog'
import { LNContactUsForm } from 'components/forms/contact-us'
import { LNRewardArgs, LNSimpleBlogArgs, LNValidatorArgs } from 'common/types/landing'
import { ARR_REWARDS, ARR_BLOGS, ARR_VALIDATORS } from 'common/constants/ui'
import { AnonymousLayout } from 'layouts/anonymous'

const LandingPage: NextPage = () => {
  const router = useRouter()
  const [rewards, setRewards] = useState<Array<LNRewardArgs>>(ARR_REWARDS || [])
  const [blogs, setBlogs] = useState<Array<LNSimpleBlogArgs>>(ARR_BLOGS || [])
  const [validators, setValidators] = useState<Array<LNValidatorArgs>>(ARR_VALIDATORS || [])
  const [name, setName] = useState<string>('')

  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (<AnonymousLayout>
    <div id="landing-page" className="">
      <section id="title" className="relative text-center pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video className="w-full h-full object-cover" src="/assets/video/video-bg.mp4" autoPlay muted playsInline loop />
        </div>
        <div className="absolute inset-0 landing-bg-overlay"></div>
        <LNLogo size="large" variant="vertical"/>
        <p className="relative text-7xl md:text-9xl font-corporate text-gray-light uppercase leading-70p mt-4 md:mt-8 mb-8 md:mb-12">
          Do more<br/>With your ETH
        </p>
        <p className="relative text-2xl md:text-3xl uppercase text-yellow font-light mb-16 md:mb-20">
          Make stake happen
        </p>
        <LNButton size="large" style="outlined" title="Start staking" className="relative uppercase" onClick={() => navigateTo('staking-pool')}/>
      </section>
      <section id="about" className="text-center max-w-7xl mx-auto px-6">
        <p className="uppercase text-gray-light text-xl pt-24 mb-6">Rewards / Benefits</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {rewards.map((r, ri) => <LNReward key={ri} title={r.title} description={r.description} imgSrc={r.imgSrc} />)}
        </div>
      </section>
      <section id="services" className="pt-24">
        <div className="grid grid-cols-1">
          {blogs.map((b, bi) => <LNSimpleBlog key={bi} title={b.title} description={b.description}
            side={b.side} btnTitle={b.btnTitle} imgSrc={b.imgSrc} noBorder={b.noBorder} />)}
        </div>
      </section>
      <section id="validators" className="max-w-7xl mx-auto text-center mb-20 px-6">
        <p className="text-xl text-gray-light uppercase py-10">Validators</p>
        {/* <p className="text-lg text-gray">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        <p className="text-lg text-gray">eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
        <p className="text-lg text-gray">non proident, sunt in culpa qui officia</p> */}
        <div className="flex my-32">
          {validators.map((v, vi) => <div key={vi} className="flex-1 flex items-center justify-center px-2">
            <div className={v.paddingClass}>
              <Image src={v.imgSrc} width={v.width} height={v.height} alt={v.alt}/>
            </div>
          </div>)}
        </div>
      </section>
      <section id="contact" className="text-center max-w-4xl mx-auto my-20 px-6">
        <LNContactUsForm />
      </section>
    </div>
  </AnonymousLayout>)
}

export default LandingPage
