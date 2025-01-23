import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Loading from "./loading";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Workflow.com - Automate any workflow with AI",
  description: "Build custom AI automations to scale your marketing, sales, and operations—making your team 10x more efficient, without coding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Loading />
        <div className={spaceGrotesk.className}>{children}</div>
      </body>
    </html>
  );
}
