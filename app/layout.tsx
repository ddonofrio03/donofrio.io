import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "DONOFR.IO — A Family of Builders",
  description:
    "The D'Onofrios — AI, sales, marketing, and public affairs expertise. We help businesses communicate clearly and grow.",
  openGraph: {
    title: "DONOFR.IO — A Family of Builders",
    description:
      "AI, sales, marketing, and public affairs. A family of builders, problem-solvers, and straight shooters.",
    url: "https://donofr.io",
    siteName: "DONOFR.IO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer>
          <div className="logo">
            DONOFR<span>.IO</span>
          </div>
          <p>A family of builders. &copy; {new Date().getFullYear()} DONOFR.IO</p>
        </footer>
      </body>
    </html>
  );
}
