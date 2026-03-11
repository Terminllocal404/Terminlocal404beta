import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { TermsOfUse } from "./pages/TermsOfUse";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { CommunityPage } from "./pages/CommunityPage";
import { RequestPage } from "./pages/RequestPage";
import { FounderProfile } from "./pages/FounderProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "termos", Component: TermsOfUse },
      { path: "privacidade", Component: PrivacyPolicy },
      { path: "sobre", Component: AboutPage },
      { path: "servicos", Component: ServicesPage },
      { path: "contato", Component: ContactPage },
      { path: "comunidade", Component: CommunityPage },
      { path: "solicitacao", Component: RequestPage },
      { path: "equipe/:id", Component: FounderProfile },
    ],
  },
]);
