import type { Metadata } from "next";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["400","500","600", "700","800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  title: "Letronomo",
  description: "Cuenta el numero de letra, oraciones y palabras de tu texto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} dark:bg-gray-800`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
