import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Booked AI - Your AI Travel Agent",
  description: "The world's first AI-powered travel agent, engineered to handle every step a human agent would. Book flights, hotels, and create itineraries through an easy-to-use chat platform.",
  keywords: "AI travel agent, travel booking, flights, hotels, itineraries, IATA accredited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
