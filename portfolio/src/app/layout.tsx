import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/atoms/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "กิตติพันธ์ | นักพัฒนาเว็บและโมบายแอปพลิเคชัน",
  description:
    "พอร์ตโฟลิโอของกิตติพันธ์ - นักพัฒนาเว็บและโมบายแอปพลิเคชันที่มีประสบการณ์ด้าน Flutter, การพัฒนาเว็บ และ IoT",
  keywords: "Flutter, Web Development, IoT, Mobile Developer, Thailand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
