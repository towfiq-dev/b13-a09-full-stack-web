import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Smart Clinic Solution | Digital Healthcare Experience",
    template: "%s | Smart Clinic Solution",
  },
  description: "Manage appointments, top-rated specialist doctors, medical reports, and client history on a seamless digital healthcare platform. Experience smart clinic solutions today.",
  keywords: [
    "Smart Clinic Solution",
    "Doctor Appointment Booking",
    "Digital Healthcare",
    "Find a Doctor",
    "Online Medical Service",
    "Top-Rated Specialists",
    "Telemedicine Bangladesh",
    "Healthcare Platform"
  ],
  authors: [{ name: "DocAppointment Industries Ltd." }],
  creator: "DocAppointment Industries Ltd.",
  publisher: "DocAppointment Industries Ltd.",
  
  openGraph: {
    title: "Smart Clinic Solution | Digital Healthcare Experience For Everyone",
    description: "Book appointments with top-rated specialist doctors instantly. Manage your health records with our secure and smart clinic platform.",
    url: "https://doctor-appointment-manager-one.vercel.app",
    siteName: "Smart Clinic Solution",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Smart Clinic Solution | Digital Healthcare Experience",
    description: "Find the best doctors and book appointments online with ease.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ToastContainer />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}