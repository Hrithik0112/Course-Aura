import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div>
      {/* header section */}
      <Header/>
      {/* Hero section */}
      <Hero/>
    </div>
  );
}
