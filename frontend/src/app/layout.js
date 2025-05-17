// import {Montserrat} from "next/font/google";
export const dynamic = "force-dynamic"; 
import { Poppins ,IBM_Plex_Sans_Thai } from 'next/font/google';
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300', '400', '500','600'],
  variable: '--font-poppins',
});

const ibmThai = IBM_Plex_Sans_Thai({
  subsets: ['thai'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-thai',
});

export const metadata = {
  title: "Oxegène",
  description: "ร้านขายต้นไม้ฟอกอากาศ ส่งตรงถึงบ้านคุณ",
  openGraph: {
    title: "Oxegène Air Purifying Tree",
    description: "เลือกต้นไม้เพื่อชีวิตที่สดชื่นและยั่งยืน",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Oxegène Logo",
      },
    ],
    url: "https://plantshop-frontend.onrender.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${poppins.variable} ${ibmThai.variable}`}>
      <body>
          <ScrollToTop />
          <Navbar />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
