import { useMemo, useRef, SyntheticEvent } from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { LNSimpleBlogArgs } from "common/types/landing";

export const LNSimpleBlog = ({
  title,
  description,
  btnTitle,
  side,
  imgSrc,
  noBorder,
}: LNSimpleBlogArgs) => {
  const btnRef = useRef<HTMLDivElement>(null);

  const ephemaral = useMemo(
    () => ({
      in: side === "ltr" ? "fadeInLeft" : "fadeInRight",
      out: side === "ltr" ? "fadeOutLeft" : "fadeOutRight",
      before: noBorder
        ? ""
        : ` before:content-[""] before:h-1 before:w-full before:absolute before:-top-2 before:bg-slate-700 ${
            side === "ltr" ? "before:rotate-3" : "before:rotate-357"
          }`,
    }),
    [side, noBorder]
  );

  const onMouseEnter = (event: SyntheticEvent) => {
    if (btnRef && btnRef.current) {
      btnRef.current.className += " animated zoomIn";
    }
  };

  const onMouseLeave = (event: SyntheticEvent) => {
    if (btnRef && btnRef.current) {
      btnRef.current.className = btnRef.current.className.replace(
        " animated zoomIn",
        ""
      );
    }
  };

  return (
    <div className={"relative w-full md:flex py-12" + ephemaral.before}>
      <div
        className={
          "md:flex-auto md:w-32 overflow-hidden" +
          (side === "rtl" ? " order-2" : "")
        }
      >
        <ScrollAnimation animateIn={ephemaral.in} animateOut={ephemaral.out}>
          <Image src={imgSrc} width={700} height={700} alt="Blog Image" />
        </ScrollAnimation>
      </div>
      <div
        className={
          "md:flex-auto md:w-64 p-8 md:p-8 lg:py-44 lg:px-40" +
          (side === "rtl" ? " order-1" : "")
        }
      >
        <p className="text-2xl uppercase text-gray-light mb-4">{title}</p>
        <p className="text-lg text-gray mb-8">{description}</p>
        <p className="text-lg text-yellow">
          <span
            ref={btnRef}
            className="transition hover:cursor-pointer"
            style={{ animationDuration: "1.5s" }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {btnTitle}
            <FontAwesomeIcon className="text-sm ml-2" icon={faChevronRight} />
          </span>
        </p>
      </div>
    </div>
  );
};
