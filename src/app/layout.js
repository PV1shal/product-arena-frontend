import localFont from "next/font/local";
import "./globals.css";
import TopNavBar from "./components/top_nav";
import { Suspense } from "react";
import Loading from "./loading";
import { ComparisonProvider } from "./comparison/context/CompareContext";
import { Analytics } from "@vercel/analytics/react"

const manbow_lines = localFont({
  src: "./fonts/manbow_lines.otf",
  variable: "--font-manbow_lines",
  weight: "100 900",
})

const manbow_solid = localFont({
  src: "./fonts/manbow_solid.otf",
  variable: "--font-manbow_solid",
  weight: "100 900",
})

export const metadata = {
  title: "Product Arena",
  description: "Compare and buy what's best!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manbow_lines.variable} ${manbow_solid.variable} antialiased pt-16`}
      >
        <TopNavBar />
        <main>
          <ComparisonProvider>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </ComparisonProvider>
        </main>
      </body>
    </html>
  );
}
