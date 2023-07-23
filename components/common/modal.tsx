import { useMemo, ReactNode, MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const overlayStyle =
  "fixed inset-0 bg-black bg-opacity-70 overflow-y-auto z-50 flex justify-center items-center animated fadeIn";
const animationStyle = { animationDuration: "0.5s" };

export const LNModal = ({
  isOpen,
  onClose,
  children,
  className = "",
}: {
  isOpen: boolean;
  onClose: Function;
  children: ReactNode;
  className?: string;
}) => {
  const modalWrapperStyle = useMemo(() => {
    return animationStyle;
  }, []);

  const modalWrapperClasses = useMemo(() => {
    const defaultStyle =
      "min-w-1/4 bg-blue-800 p-8 animated slideInDown rounded";
    return `${defaultStyle} ${className}`;
  }, [className]);

  const onClickModalWrapper = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return !isOpen ? null : (
    <div
      className={overlayStyle}
      style={animationStyle}
      onClick={() => onClose()}
    >
      <div
        className={modalWrapperClasses}
        style={modalWrapperStyle}
        onClick={onClickModalWrapper}
      >
        <FontAwesomeIcon
          className="header-close-drawer float-right"
          icon={faTimes}
          onClick={() => onClose()}
        />
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};
