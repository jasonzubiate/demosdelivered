import "@/styles/globals.css";
import LenisContext from "@/context/LenisContext";

import { Navbar, Footer, PageLoader, CursorDot } from "@/components";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Demos Delivered",
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
          <PageLoader />
          <Navbar />
          <CursorDot />
          {children}
          <Analytics />
          <Footer />
        </body>
      </html>
    </LenisContext>
  );
}
