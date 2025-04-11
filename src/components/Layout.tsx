import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center bg-shade-800 text-shade-100">
      <Header />

      <main className="min-h-screen w-full flex-1 pb-20 pt-24 md:pb-16 md:pt-28">
        {children}
      </main>

      {/* Footer component */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;