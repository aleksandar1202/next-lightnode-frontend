import Image from "next/image";
import { LNRewardArgs } from "common/types/landing";

export const LNReward = ({ title, description, imgSrc }: LNRewardArgs) => {
  return (
    <div className="w-full h-full py-20 px-12 border border-transparent hover:border hover:rounded-lg hover:border-gray duration-300">
      <Image src={imgSrc} width={66} height={66} alt="Reward Image" />
      <p className="text-2xl uppercase text-gray-light mt-2 mb-4">{title}</p>
      <p className="text-lg text-gray">{description}</p>
    </div>
  );
};
