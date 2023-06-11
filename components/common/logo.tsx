import Image from 'next/image'

type logoSize = 'large' | 'medium' | 'small'

const logoSizes = {
  large: { width: 200, height: 280 },
  medium: { width: 100, height: 140 },
  small: { width: 50, height: 70 }
}

export const LNLogo = ({
  size
}: { size: logoSize }) => {
  return (<Image src="/assets/images/Group-72.png" width={logoSizes[size].width} height={logoSizes[size].height} />)
}
