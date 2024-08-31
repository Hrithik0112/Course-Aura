import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-200 via-purple-400 to-purple-600 items-center justify-center">
     <h2>Wake Up to Reality</h2>
     <Button>Get Started</Button> 
    </div>
  );
}
