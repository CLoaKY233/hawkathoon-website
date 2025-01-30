import React from "react";
import dynamic from "next/dynamic";
import HawkathonHero from "./components/HawkathonHero";

const HastakritiHero = dynamic(() => import("./components/HastakritiHero"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <HawkathonHero />
    </main>
  );
}
