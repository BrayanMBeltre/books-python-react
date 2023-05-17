import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-[#1d2021] text-white">
      <div className="min-h-screen container mx-auto pt-10">
        <h1 className="font-bold text-4xl ">BIB</h1>
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
