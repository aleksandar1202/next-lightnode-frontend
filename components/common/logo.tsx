import { useMemo } from "react";
import Image from "next/image";
import { ResponsiveSize, LogoVariant } from "common/types/components";

const verticalLogoSizes = {
  large: { width: 200, height: 280 },
  medium: { width: 150, height: 210 },
  small: { width: 50, height: 70 },
};

const soloLogoSizes = {
  large: { width: 70, height: 70 },
  medium: { width: 50, height: 50 },
  small: { width: 30, height: 30 },
};

const horitonzalLogoSizes = {
  large: { width: 209, height: 80 },
  medium: { width: 154, height: 59 },
  small: { width: 109, height: 42 },
};

export const LNLogo = ({
  size,
  variant,
}: {
  size: ResponsiveSize;
  variant: LogoVariant;
}) => {
  const sizes = useMemo(() => {
    switch (variant) {
      case "horizontal":
        return horitonzalLogoSizes;
      case "solo":
        return soloLogoSizes;
      default:
        return verticalLogoSizes;
    }
  }, [variant]);

  const styles = useMemo(
    () => ({
      width: sizes[size].width,
      height: sizes[size].height,
    }),
    [size, sizes]
  );

  const srcPath = useMemo(() => {
    switch (variant) {
      case "horizontal":
        return "/assets/images/Logo-Horizontal.png";
      case "solo":
        return "/assets/images/Logo-120.png";
      default:
        return "/assets/images/Logo-Vertical.png";
    }
  }, [variant]);

  return (
    <Image
      src={srcPath}
      width={styles.width}
      height={styles.height}
      alt="LightNode Logo"
    />
  );
};
