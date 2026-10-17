import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { siteConfig } from "@/site.config";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const montserratFont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.srashi.com"),
  title: {
    template: `%s | ${siteConfig.siteTitle}`,
    default: `${siteConfig.siteTitle} | Product Manager`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.siteTitle,
    title: `${siteConfig.siteTitle} | Product Manager`,
    description: siteConfig.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserratFont.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <main className="mx-auto min-h-screen max-w-screen-lg">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
