import Image from 'next/image'
import { ResponsiveSize } from 'common/types/components'

const logoSizes = {
  large: { width: 200, height: 280 },
  medium: { width: 150, height: 210 },
  small: { width: 50, height: 70 }
}

export const LNLogo = ({
  size
}: { size: ResponsiveSize }) => {
  return (<Image src="/assets/images/Group-72.png" width={logoSizes[size].width} height={logoSizes[size].height} />)
}
