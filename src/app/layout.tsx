import { Metadata } from "next";
import "./globals.css";

// Metadata
export const metadata: Metadata = {
  title: "Beckeysol",
  description: "",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the Pacifico font to the body */}
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}