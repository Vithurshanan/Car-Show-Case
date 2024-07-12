import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Carhub",
  description: "Discovering Best Selection of Cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='Relative '>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
