import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { motion } from "framer-motion";
import PageAnimate from "../components/PageAnimate";
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"]
  , weight: ["100", "200", "300", "400", "500", "600"]
  , style: ["normal", "italic"]
  , variable: "--font-jetBrainsMono"
})

export const metadata = {
  title: "CLASSIC GYM",
  description: "Make your body and mind fit with CLASSIC GYM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <PageAnimate>
          {children}
        </PageAnimate>
      </body>
    </html>
  );
}
