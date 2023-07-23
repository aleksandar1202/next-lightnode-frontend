type Side = "ltr" | "rtl";

export interface LNSimpleBlogArgs {
  title: string;
  description: string;
  imgSrc: string;
  btnTitle: string;
  side: Side;
  noBorder: boolean;
}

export interface LNRewardArgs {
  title: string;
  description: string;
  imgSrc: string;
}

export interface LNValidatorArgs {
  imgSrc: string;
  width: number;
  height: number;
  paddingClass: string;
  alt: string;
}
