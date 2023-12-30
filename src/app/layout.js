import { Inter } from "next/font/google";
import { Roboto, Poppins } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Metaverse",
  description:
    "Discover a limitless virtual universe with our metaverse website, where you can explore, create, and connect like never before",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
