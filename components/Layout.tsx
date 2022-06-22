interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-slate-400 w-full min-h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-[url(/assets/background.png)] animate-background opacity-50" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url(/assets/background.png)] bg-[length:400px_200px] animate-background2 opacity-30" />
      {children}
    </div>
  );
};

export default Layout;
