import { NavigationObjectType } from "common/types/common";

export const navigations: Array<NavigationObjectType> = [
  {
    href: "/staking-pool",
    title: "Staking Pool",
    icon: "/assets/svgs/Staking.svg",
    size: { width: 27, height: 27 },
  },
  {
    href: "/solo-staking",
    title: "Solo Staking",
    icon: "/assets/svgs/SoloStaking.svg",
    size: { width: 28, height: 28 },
  },
  {
    href: "/farming",
    title: "Farming",
    icon: "/assets/svgs/Farming.svg",
    size: { width: 28, height: 22 },
    // }, {
    // 	href: "/payments",
    // 	title: "Payments",
    // 	icon: '/assets/svgs/dollar-sign.svg',
    // 	size: { width: 12, height: 22}
    // }, {
    // 	href: "/dao",
    // 	title: "DAO",
    // 	icon: '/assets/svgs/DAO.svg',
    // 	size: { width: 20, height: 18}
  },
  {
    href: "/docs-guides",
    title: "Docs & Guides",
    icon: "/assets/svgs/Docs.svg",
    size: { width: 16, height: 20 },
  },
];
