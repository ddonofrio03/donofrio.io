import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "DONOFR.IO — A family of builders",
  description: "We bridge the gap between your business and the public.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer>
          <div className="container footer-inner">
            <div>DONOFR.IO</div>
            <div className="small">A family of builders.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
