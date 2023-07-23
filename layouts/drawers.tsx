import { useState, useMemo, ReactNode } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { LNLogo } from "components/common/logo";
import { NavBar } from "./navbar";

export const ClientDrawer = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState<boolean | null>(null);

  const mobileDropdownStyles = useMemo(() => {
    const defaultStyle =
      "w-screen bg-blue-800 left-0 text-right p-8 md:hidden animated fixed z-30";
    return visible
      ? `${defaultStyle} block slideInRight`
      : visible === false
      ? `${defaultStyle} block slideOutRight`
      : `${defaultStyle} hidden`;
  }, [visible]);

  return (
    <div className="relative flex overflow-hidden flex-col md:flex-row">
      <div className="w-64 bg-blue-800 h-screen fixed left-0 top-0 hidden md:block flex-none p-8">
        <Link href="/">
          <a>
            <LNLogo size="medium" variant="horizontal" />
          </a>
        </Link>
        <div className="h-32"></div>
        <NavBar />
      </div>
      <div className="flex flex-col md:hidden relative">
        <div className="flex justify-between py-4 px-6 items-center">
          <Link href="/">
            <a>
              <LNLogo size="small" variant="horizontal" />
            </a>
          </Link>
          <FontAwesomeIcon
            className="header-open-drawer"
            icon={faBars}
            onClick={() => setVisible(!visible)}
          />
        </div>
        <div
          className={mobileDropdownStyles}
          style={{ height: "calc(var(--vh, 1vh) * 100)" }}
        >
          <FontAwesomeIcon
            className="header-close-drawer ml-52 mb-12"
            icon={faTimes}
            onClick={() => setVisible(!visible)}
          />
          <NavBar />
        </div>
      </div>
      <div className="flex-1 md:ml-64 px-4 min-h-screen">{children}</div>
    </div>
  );
};
