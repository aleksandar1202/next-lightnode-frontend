import { ReactNode } from "react";
import { AnonymousHeader } from "layouts/headers";
import { AnonymousFooter } from "layouts/footers";

export const AnonymousLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative bg-blue-800">
      <AnonymousHeader />
      {children}
      <AnonymousFooter />
    </div>
  );
};
