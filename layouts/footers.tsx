import ScrollAnimation from "react-animate-on-scroll";
import { LNLogo } from "components/common/logo";

export const AnonymousFooter = () => {
  return (
    <div
      id="anonymous-footer"
      className="grid grid-cols-1 gap-8 text-center py-20"
    >
      <ScrollAnimation
        animateIn="animated fadeIn"
        animateOut="animated fadeOut"
      >
        <LNLogo size="medium" variant="vertical" />
      </ScrollAnimation>
      <p className="text-lg text-gray text-center">© 2019 lightnode.com</p>
    </div>
  );
};

export const ClientFooter = () => {
  return <div></div>;
};
