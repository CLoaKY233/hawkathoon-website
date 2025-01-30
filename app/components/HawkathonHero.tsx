"use client";

import React from "react";
import Link from "next/link";
import Particles from "./particles";
import { Navigation } from "../components/Homebar";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Schedule", href: "/schedule" },
  { name: "Prizes", href: "/prizes" },
  { name: "Register", href: "/register" },
  { name: "Contact", href: "/contact" },
];

export default function HawkathonHero() {
  return (
    <>
      <style jsx global>{`
        @keyframes title-gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <Navigation />
        
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <div className="text-center z-10">
          <h1 className="text-6xl text-transparent duration-1000 cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient">
            Hawkathoon
          </h1>
          <h2 className="mt-2 text-2xl text-zinc-400 animate-fade-in">
            By Omdena Student Chapter
          </h2>
        </div>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500">
            Join us for an exciting hackathon experience where innovation meets impact
          </h2>
        </div>
      </div>
    </>
  );
} 