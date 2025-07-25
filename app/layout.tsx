import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Value Engineering - Professional Construction Estimating Services",
  description:
    "Trusted estimating partner for modern construction. Custom quantity takeoffs for all trades across USA, Canada, UK, and Australia. We are selling peace of mind.",
    generator: 'v0.dev'
}

function Footer() {
  return (
    <footer className="w-full relative overflow-hidden py-6">
      {/* Dark Transparent Overlay - darker to match Who We Are section */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-200">© {new Date().getFullYear()} The Value Engineering. All rights reserved.</div>
        <div className="flex space-x-4 text-2xl">
          <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
          <a href="https://wa.me/919687150213" target="_blank" rel="noopener" aria-label="WhatsApp" className="hover:text-green-400 transition-colors"><FaWhatsapp /></a>
          <a href="mailto:info@thevalueengineering.com" aria-label="Email" className="hover:text-blue-400 transition-colors"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/919687150213"
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center text-3xl"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " relative min-h-screen"}>
        {/* Fixed background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none select-none bg-black"
          style={{ minHeight: '100vh', minWidth: '100vw' }}
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        {/* Content wrapper to ensure stacking above video */}
        <div className="relative z-10">
          <Navigation />
          {children}
          <Footer />
          <WhatsAppFloatingButton />
        </div>
      </body>
    </html>
  )
}
