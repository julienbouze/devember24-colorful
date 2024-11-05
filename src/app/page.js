import { Footer } from "@/components/Footer";
import { Game } from "@/components/Game";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center bg-gradient-to-br from-white to-sky-100">
      <Game/>
      <Footer/>
    </div>
  );
}
