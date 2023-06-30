import { LNValidatorArgs, LNRewardArgs, LNSimpleBlogArgs } from 'common/types/landing'

export const ThemeVariantToColor = {
  'primary': 'yellow',
  'secondary': 'gray',
  'success': 'green',
  'warning': 'yellow-light',
  'danger': 'purple-dark',
  'info': 'blue-300'
}

export const WalletTypes = [
  { name: 'Metamask', icon: '/assets/svgs/MetaMask.svg' },
  { name: 'Torus', icon: '/assets/svgs/Torus.svg' },
  { name: 'Coinbase', icon: '/assets/images/CoinBase.png' },
  { name: 'WalletConnect', icon: '/assets/images/WalletConnect.png' },
  { name: 'Ledger', icon: '/assets/images/Ledger.png' },
  { name: 'Trezor', icon: '/assets/images/Trezor.png' }
]

export const ARR_REWARDS: Array<LNRewardArgs> = [{
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

export const ARR_BLOGS: Array<LNSimpleBlogArgs> = [{
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

export const ARR_VALIDATORS: Array<LNValidatorArgs> = [{
  imgSrc: '/assets/images/image-9-7.png',
  width: 226,
  height: 65,
  paddingClass: 'px-0',
  alt: 'Azure'
}, {
  imgSrc: '/assets/images/image-10-7.png',
  width: 107,
  height: 107,
  paddingClass: 'px-4 sm:px-6 md:px-7',
  alt: 'Google'
}, {
  imgSrc: '/assets/images/image-11-7.png',
  width: 132,
  height: 79,
  paddingClass: 'px-4',
  alt: 'Amazon Web Service'
}]
