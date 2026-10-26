import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.geebdev.my.id"),

  title: {
    default: "GeebDev Space",
    template: "%s | GeebDev Space",
  },

  description:
    "Explore the official portfolio of M Gibran (GeebDev Space). Full Stack Developer specializing in modern web applications, scalable software, and high-performance user experiences.",

  keywords: [
    "Geeb Dev Space",
    "Web Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Web Development Portfolio",
  ],
  authors: [{ name: "Geeb Dev Space" }],
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "GeebDev Space | Web Developer & Portfolio",
    description:
      "Explore the official portfolio of M Gibran (GeebDev Space). Full Stack Developer specializing in modern web applications, scalable software, and high-performance user experiences.",
    url: "https://www.geebdev.my.id",
    siteName: "Geeb Dev Space",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Geeb Dev Space | Web Developer & Portfolio",
    description:
      "Explore the official portfolio of M Gibran (GeebDev Space). Full Stack Developer specializing in modern web applications, scalable software, and high-performance user experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
