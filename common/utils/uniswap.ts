import { BigNumber, ethers } from "ethers";
import { Pool } from "@uniswap/v3-sdk";
import { Token } from "@uniswap/sdk-core";
import { abi as IUniswapV3PoolABI } from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";
import {
  abi as IUniswapV3FactoryABI,
  bytecode as IUniswapV3FactorByteCode,
} from "@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json";

import { Addresses, EthereumRpcProvider } from "common/constants/contracts";
import { Immutables, State } from "common/types/uniswap";

const provider = new ethers.providers.JsonRpcProvider(EthereumRpcProvider);

export async function getPoolImmutables(poolAddress: string) {
  const poolContract = new ethers.Contract(
    poolAddress,
    IUniswapV3PoolABI,
    provider
  );
  const PoolImmutables: Immutables = {
    factory: await poolContract.factory(),
    token0: await poolContract.token0(),
    token1: await poolContract.token1(),
    fee: await poolContract.fee(),
    tickSpacing: await poolContract.tickSpacing(),
    maxLiquidityPerTick: await poolContract.maxLiquidityPerTick(),
  };
  return PoolImmutables;
}

export async function getPoolState(poolAddress: string) {
  const poolContract = new ethers.Contract(
    poolAddress,
    IUniswapV3PoolABI,
    provider
  );
  const [liquidity, slot] = await Promise.all([
    poolContract.liquidity(),
    poolContract.slot0(),
  ]);

  const PoolState: State = {
    liquidity,
    sqrtPriceX96: slot[0],
    tick: slot[1],
    observationIndex: slot[2],
    observationCardinality: slot[3],
    observationCardinalityNext: slot[4],
    feeProtocol: slot[5],
    unlocked: slot[6],
  };

  return PoolState;
}

export async function createPoolInstance(poolAddress: string) {
  const [immutables, state] = await Promise.all([
    getPoolImmutables(poolAddress) as Promise<Immutables>,
    getPoolState(poolAddress) as Promise<State>,
  ]);

  const TokenA = new Token(3, immutables.token0, 6, "USDC", "USD Coin");

  const TokenB = new Token(3, immutables.token1, 18, "WETH", "Wrapped Ether");

  const poolInstance = new Pool(
    TokenA,
    TokenB,
    immutables.fee,
    state.sqrtPriceX96.toString(),
    state.liquidity.toString(),
    state.tick
  );
  console.log(poolInstance);

  return poolInstance;
}

export async function createNewPool(
  tokenA: string,
  tokenB: string,
  fee: number
) {
  const factoryContract = new ethers.Contract(
    Addresses.UniswapV3Factory,
    IUniswapV3FactoryABI,
    provider
  );

  await factoryContract.createPool(
    tokenA,
    tokenB,
    BigNumber.from(fee).toString()
  );
}
