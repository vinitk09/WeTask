"use client";
import BelowHero from "@/components/belowhero/BelowHero";
import BelowHero2 from "@/components/belowhero2/BelowHero2";
import Footer from "@/components/footer/Footer";
import Herosection from "@/components/HeroSection/Herosection";
import Navbar from "@/components/Navbar";
import NavbarB from "@/components/navbarBelow/NavbarB";
import SecondLast from "@/components/secondlast/SecondLast";
import Service from "@/components/services/Service";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <NavbarB />
      <Herosection />
      <BelowHero />
      <BelowHero2 />
      <Service />
      <SecondLast />
      <Footer />
    </main>
  );
}
