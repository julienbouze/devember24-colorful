import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Devember'24 -  Colorful",
  description: "Challenge n°5 for Devember'24 : Colorful",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased h-screen w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
