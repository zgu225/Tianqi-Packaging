import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Tianqi Packaging — Factory & Certifications",
  description:
    "Learn about Tianqi Packaging — our Dongguan factory, manufacturing capabilities, FSC and ISO certifications, and commitment to sustainable paper packaging.",
};

export default function AboutPage() {
  return <AboutContent />;
}
