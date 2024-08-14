import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import "@/styles/globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={manrope.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
