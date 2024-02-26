import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wojciech Czekała",
  description: "Strona internetowa prof. Wojciech Czekały - wykładowcy, konsultanta, naukowca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
