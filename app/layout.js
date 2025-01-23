import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "./AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Blogger",
  description: "A simple blog viewer application",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header>
            <Navbar />
          </header>
          <main className="min-h-[calc(100vh-190px)] container mx-auto sm:w-11/12">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </AuthProvider>
  );
}
