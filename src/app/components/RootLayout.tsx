import { Outlet, ScrollRestoration } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { ScrollToTop } from "./ScrollToTop";

export function RootLayout() {
  return (
    <div className="bg-[#020408] min-h-screen text-white antialiased">
      <ScrollRestoration />
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
