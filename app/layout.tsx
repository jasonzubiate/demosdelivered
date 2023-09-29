import "@/styles/globals.css";
import LenisContext from "@/context/LenisContext";

import { Navbar, Footer, PageLoader, CursorDot } from "@/components";
import { Analytics } from "@vercel/analytics/react";
import { constructMetaData } from "@/utils/metadata";

export const metadata = constructMetaData()

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
