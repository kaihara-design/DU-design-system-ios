import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DiagnosUs iOS — Design System",
  description: "Color tokens, typography, spacing, components, and patterns for the DiagnosUs iOS app.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
