import { ReactNode } from "react";
import Divider from "./Divider";

type LayoutProps = {
  children: ReactNode;
  leftHeaderContent?: ReactNode;
};

const Layout = ({ children, leftHeaderContent }: LayoutProps) => {
  return (
    <div data-theme="business" className="bg-base-100">
      <div className="min-h-screen max-w-3xl mx-auto pt-10">
        <div className="px-7 lg:px-0 flex items-center justify-between">
          <div className="">{leftHeaderContent}</div>
          <div className="flex gap-4 text-4xl justify-center items-center flex-wrap-reverse">
            <h1 className="font-bold  ">Coco Library </h1>
            <span>🥥</span>
          </div>
          <div />
        </div>

        <Divider className="mt-2" />
        <div className="mt-10 px-7 lg:px-0 pb-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
