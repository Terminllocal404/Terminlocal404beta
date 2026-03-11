import { Outlet, ScrollRestoration } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function RootLayout() {
  return (
    <div className="bg-[#05070D] min-h-screen text-white font-sans selection:bg-[#00E5FF] selection:text-[#05070D]">
      <ScrollRestoration />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
