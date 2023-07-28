import { Environment, Network, ContractAddresses } from "../types/common";

const addresses = new Map<Network, ContractAddresses>([
  [
    "ethereum",
    {
      LightNode: "",
      UniswapV3Factory: "0x1f98431c8ad98523631ae4a59f267346ea31f984"
    },
  ],
  [
    "goerli",
    {
      LightNode: "0x6F26B417f2622eD65A964b37Db815998849C2518",
      UniswapV3Factory: "0x1f98431c8ad98523631ae4a59f267346ea31f984"
    },
  ],
]);

const networks = new Map<Environment, Network>([
  ["development", "goerli"],
  ["production", "ethereum"],
]);

const environment: Environment = "development";
const network: Network = networks.get(environment) as Network;

export const Addresses: ContractAddresses = addresses.get(
  network
) as ContractAddresses;

export const EthereumRpcProvider: string = {
  development: "https://goerli.infura.io/v3/607f37db34664d4ca32d911fb2639a24",
  production: "https://mainnet.infura.io/v3/607f37db34664d4ca32d911fb2639a24",
}[environment];
