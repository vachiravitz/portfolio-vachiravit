import type { Metadata } from "next";
import { PortfolioPage } from "./components/PortfolioPage";

export const metadata: Metadata = {
  title: "Your Name — Creative Developer",
  description: "Computer Science portfolio focused on thoughtful engineering and human-centered digital experiences.",
};

export default function Home() {
  return <PortfolioPage />;
}

