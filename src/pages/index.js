import Navbar from "@/components/Navbar";
import Transition from "@/components/Transition";

export default function Home() {
  return (
    <Transition>
      <div className="fixed top-0 w-full">
        <Navbar />
      </div>
      <main className="h-screen w-full flex items-center justify-center">
        <span className="font-[500] uppercase text-[8vw] md:text-[5vw] leading-[100%] tracking-[0.5em]">
          Home
        </span>
      </main>
    </Transition>
  );
}
