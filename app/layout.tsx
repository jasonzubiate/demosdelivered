import "@/styles/globals.css";
import { Navbar, Footer } from "@/components";
import type { Metadata } from "next";
import LenisContext from "@/context/LenisContext";

export const metadata: Metadata = {
  title: "LABELLINKS",
  description: "Explore all of the hottest edm labels to submit your demo to.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisContext>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </LenisContext>
  );
}
