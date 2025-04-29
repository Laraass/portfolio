import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col items-center bg-shade-800 text-shade-100">
      <Header />

      <main className="min-h-screen w-full flex-1 pb-20 md:pb-16 px-4">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
