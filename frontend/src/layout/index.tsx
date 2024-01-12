import { NavbarContainer, HeaderContainer } from "../container";

interface LayoutProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="w-full h-full">
      <HeaderContainer />
      <div className="flex h-[calc(100vh-72px)]">
        <NavbarContainer />
        <aside className="w-full h-full bg-gray-100 p-5">{children}</aside>
      </div>
    </main>
  );
};

export const WithLayout = (Component: React.FC) => () => {
  return (
    <LayoutComponent>
      <Component />
    </LayoutComponent>
  );
};
