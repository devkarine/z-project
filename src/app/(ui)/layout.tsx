import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="min-h-full flex justify-center mx-auto max-w-7xl">
      <section className="hidden lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-r-2 border-gray-900 ">
        ESQUERDA
      </section>
      <section className="flex-1 max-w-lg">{children}</section>
      <aside className="hidden lg:flex flex-col sticky top-0 h-fit w-96 px-8 py-6 border-l-2 border-gray-900">
        DIREITA
      </aside>
    </main>
  );
};

export default Layout;
