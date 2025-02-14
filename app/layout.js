import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_component/Shared/Header";
import Footer from "./_component/Shared/Footer";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Percent",
  description: "Download Percent app on the app sotre!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
