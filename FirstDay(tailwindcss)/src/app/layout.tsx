import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <ThemeProvider attribute="class">
            <Navbar />
            <div>{children}</div>
            <Footer />
            <PopupWidget />
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
