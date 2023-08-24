import Header from "./components/Header";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Next Backend learning",
  description: "NextJs backend learning with OSTAD team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div className=" container mx-auto py-20">{children}</div>
      </body>
    </html>
  );
}
