import { Environment, Network, ContractAddresses } from "../types/common";

const addresses = new Map<Network, ContractAddresses>([
  [
    "ethereum",
    {
      LightNode: "",
    },
  ],
  [
    "goerli",
    {
      LightNode: "0x6F26B417f2622eD65A964b37Db815998849C2518",
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
