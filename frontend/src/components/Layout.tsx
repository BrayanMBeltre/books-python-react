import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  leftHeaderContent?: ReactNode;
};

const Layout = ({ children, leftHeaderContent }: LayoutProps) => {
  return (
    <div data-theme="retro" className="bg-base-100">
      <div className="min-h-screen max-w-3xl mx-auto pt-10">
        <div className="flex justify-between">
          <div>{leftHeaderContent}</div>
          <h1 className="font-bold text-4xl">BIB</h1>
          <div />
        </div>

        <div className="h-1 rounded-full mt-2 bg-gray-50" />
        <div className="mt-10 px-7 lg:px-0">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
