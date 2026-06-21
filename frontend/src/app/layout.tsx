import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://niranjankumar.dev"),
  title: { default:"Niranjan Kumar | AI Product Builder & UI/UX Designer", template:"%s | Niranjan Kumar" },
  description: "Portfolio of Niranjan Kumar — AI Product Builder, UI/UX Designer & Front-End Developer from Hyderabad.",
  openGraph: { type:"website", locale:"en_IN", url:"https://niranjankumar.dev", siteName:"Niranjan Kumar Portfolio", images:[{url:"/og-image.png",width:1200,height:630}] },
  robots: { index:true, follow:true },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com"/>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/png" href="/Logo/favicon.png"/>
      </head>
      <body className={inter.className} style={{background:"#090414",color:"#fff",overflowX:"hidden"}}>
        <Navbar/>
        <main style={{padding:"0 40px"}}>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}