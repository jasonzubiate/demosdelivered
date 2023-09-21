import "@/styles/globals.css";
import { Navbar, Footer } from "@/components";
import type { Metadata } from "next";
import LenisContext from "@/context/LenisContext";
import { PageLoader } from "@/components";

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
          <PageLoader>
            <Navbar />
            {children}
            <Footer />
          </PageLoader>
        </body>
      </html>
    </LenisContext>
  );
}
