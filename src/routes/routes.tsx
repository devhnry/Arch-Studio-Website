import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import PortfolioPage from "../pages/PortfolioPage";
import { AboutUsPage } from "../pages/AboutPage";
import { ContactUsPage } from "../pages/ContactUsPage";
import PageLoader from "../components/PageLoader";
import NotFound from "../components/NotFound.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLoader />,
    errorElement: <NotFound />
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />
  },
  {
    path: "/about-us",
    element: <AboutUsPage />
  },
  {
    path: "/contact",
    element: <ContactUsPage />
  }
], {
  basename: process.env.PUBLIC_URL || "/"
});