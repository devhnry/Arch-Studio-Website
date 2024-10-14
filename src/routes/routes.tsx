import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import PortfolioPage from "../pages/PortfolioPage.tsx";
import { AboutUsPage } from "../pages/AboutPage.tsx";
import {ContactUsPage} from "../pages/ContactUsPage.tsx";
import PageLoader from "../components/PageLoader.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLoader />
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
]);
