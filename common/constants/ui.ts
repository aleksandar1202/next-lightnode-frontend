import {
  LNValidatorArgs,
  LNRewardArgs,
  LNSimpleBlogArgs,
} from "common/types/landing";

export const ThemeVariantToColor = {
  primary: "yellow",
  secondary: "gray",
  success: "green",
  warning: "yellow-light",
  danger: "purple-dark",
  info: "blue-300",
};

export const WalletTypes = [
  { name: "Metamask", icon: "/assets/svgs/MetaMask.svg" },
  { name: "Torus", icon: "/assets/svgs/Torus.svg" },
  { name: "Coinbase", icon: "/assets/images/CoinBase.png" },
  { name: "WalletConnect", icon: "/assets/images/WalletConnect.png" },
  { name: "Ledger", icon: "/assets/images/Ledger.png" },
  { name: "Trezor", icon: "/assets/images/Trezor.png" },
];

export const ARR_REWARDS: Array<LNRewardArgs> = [
  {
    title: "Open doors",
    description:
      "Open the doors of PoS staking to anyone and everyone, regardless of financial or social status",
    imgSrc: "/assets/images/Group-3.png",
  },
  {
    title: "Max yield",
    description:
      "Create the highest yield, lowest fee-for-profit staking service",
    imgSrc: "/assets/images/Group-4.png",
  },
  {
    title: "Community",
    description: "Be the most community-centric staking pool",
    imgSrc: "/assets/images/Group-5.png",
  },
  {
    title: "All in one",
    description:
      "Eventually allow users to stake any major PoS coin. Effectively creating a one-stop service to allow users to deposit and tokenize their coins",
    imgSrc: "/assets/images/Group-3.png",
  },
  {
    title: "DeFi",
    description:
      "Allow users to maximize their yield using third-party DeFi protocols across the network",
    imgSrc: "/assets/images/Group-4.png",
  },
  {
    title: "API first",
    description:
      "Extensible, API-first approach tapping into major providers to ensure a friendly user experience",
    imgSrc: "/assets/images/Group-5.png",
  },
];

export const ARR_BLOGS: Array<LNSimpleBlogArgs> = [
  {
    title: "WHAT IS LIGHTNODE?",
    btnTitle: "Link to Whitepaper",
    side: "ltr",
    imgSrc: "/assets/images/v1.png",
    noBorder: true,
    description:
      "Lightnode is a simplified and secure tokenized staking service that maximizes the interest users can earn on Proof of Stake tokens. LightNode offers two types of staking services. LightNode Shared and LightNode Solo. Users may also participate in liquidity farming as LightNode will offer additional rewards for those who choose to do so. Ethereum will be the first asset that LightNode supports.",
  },
  {
    title: "LIGHTNODE SHARED",
    btnTitle: "Learn more",
    side: "ltr",
    imgSrc: "/assets/images/v3.png",
    noBorder: false,
    description:
      "For users with less than 32 Ethereum, LightNode Shared offers a network of validators on behalf of users who wish to stake their Ethereum. Once the 32 Ethereum threshold is met from the collective deposits, a new validator is created and added to LightNode Shared to earn rewards. Users are paid out in proportion to their share in the staking pool represented by a 1:1 ratio taken called slETH. This token",
  },
  {
    title: "LIGHTNODE SOLO",
    btnTitle: "Learn more",
    side: "rtl",
    imgSrc: "/assets/images/Group-76.png",
    noBorder: false,
    description:
      "For users with greater than 32 Ethereum, LightNode Solo intends to make staking and running a personal validator as simple as possible without the difficulties of maintaining and operating your own server or hardware. Our semi-centralized approach provides users with greater security and convenience.",
  },
  {
    title: "WHAT IS SLETH",
    btnTitle: "Learn more",
    side: "rtl",
    imgSrc: "/assets/images/v2.png",
    noBorder: false,
    description:
      "slETH is a 1:1 ratio utility token which is given to a user who deposits Ethereum into LightNode Shared. Since this token is backed by liquidity, users may exchange their slETH back into Ethereum at any time. slETH may additionally be used for voting rights within LightNode DAO.",
  },
  {
    title: "LIGHTNODE LIQUIDITY FARM",
    btnTitle: "Learn more",
    side: "ltr",
    imgSrc: "/assets/images/v5.png",
    noBorder: false,
    description:
      "Users who wish to participate in LightNode Liquidity Farm may do so by adding liquidity to the slETH/ETH pool. LightNode will begin with Uniswap and over time will begin to reach out to additional DeFi protocols.",
  },
  {
    title: "ROADMAP",
    btnTitle: "Learn more",
    side: "rtl",
    imgSrc: "/assets/images/v6.png",
    noBorder: false,
    description: "LightNode aims to deploy to main by the late 2022.",
  },
];

export const ARR_VALIDATORS: Array<LNValidatorArgs> = [
  {
    imgSrc: "/assets/images/image-9-7.png",
    width: 226,
    height: 65,
    paddingClass: "px-0",
    alt: "Azure",
  },
  {
    imgSrc: "/assets/images/image-10-7.png",
    width: 107,
    height: 107,
    paddingClass: "px-4 sm:px-6 md:px-7",
    alt: "Google",
  },
  {
    imgSrc: "/assets/images/image-11-7.png",
    width: 132,
    height: 79,
    paddingClass: "px-4",
    alt: "Amazon Web Service",
  },
];
