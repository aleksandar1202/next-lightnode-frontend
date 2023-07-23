import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const supportedChainIds = [1, 3, 4, 5, 42];

export const Metamask = new InjectedConnector({
  supportedChainIds,
});

export const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  appName: "LightNode",
  supportedChainIds,
});

export const WalletConnect = new WalletConnectConnector({
  infuraId: process.env.REACT_APP_INFURA_KEY,
  bridge: "https://bridge.walletconnect.org",
  supportedChainIds,
});
