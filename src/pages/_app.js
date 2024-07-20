import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Luxurious_Roman } from "next/font/google";

const luxurious_Roman = Luxurious_Roman({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps, router }) {
  return (
    <div className={luxurious_Roman.className}>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
