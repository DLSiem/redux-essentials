import { MainNav, Footer } from ".";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
