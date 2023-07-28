export interface NavigationObjectType {
  href: string;
  title: string;
  icon: string;
  size: {
    width: number;
    height: number;
  };
}

export interface KeyValueMapping {
  key: string;
  value: string | number;
}

export interface Mapping {
  [key: string]: string | number | boolean | Object;
}

export type Environment = "development" | "production";
export type Network = "goerli" | "ethereum";
export interface ContractAddresses {
  LightNode: string;
  UniswapV3Factory: string;
  UniswapV3Router?: string;
  UniswapV3Pool?: string;
}
