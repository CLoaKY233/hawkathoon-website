"use client";

import React from "react";
import Link from "next/link";
import Particles from "./particles";
import { Navigation } from "../components/Homebar";

const navigation = [

  { name: "About", href: "/about" },
  // { name: "Why Us", href: "/why-us" },
  { name: "Research", href: "/research" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function HastakritiHero() {
  return (
      <>
        <style jsx global>{`
          @font-face {
            font-family: "hindi-font";
            src: url("/assets/misc/Ananda_Namaste_Regular.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "hindi-font-2";
            src: url("/assets/misc/Ananda_Neptouch_Regular.ttf")
            format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">

          <Navigation />
          {/*<nav className="my-16 animate-fade-in">*/}

          {/*  <ul className="flex items-center justify-center gap-20">*/}

          {/*    {navigation.map((item) => (*/}
          {/*        <Link*/}
          {/*            key={item.href}*/}
          {/*            href={item.href}*/}
          {/*            className="text-{10} duration-500 text-zinc-500 hover:text-zinc-300"*/}
          {/*        >*/}
          {/*          {item.name}*/}
          {/*        </Link>*/}
          {/*    ))}*/}
          {/*  </ul>*/}
          {/*</nav>*/}
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={100}
          />
          <h1
              className="py-3.5 px-0.5 z-10 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
              style={{ fontFamily: "hindi-font, hindi-font-2, sans-serif" }}
          >
            Hastakriti
          </h1>

          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <div className="my-16 text-center animate-fade-in">
            <h2 className="text-sm text-zinc-500 ">
              We're building prosthetic hands for the differently-abled and
              working
            </h2>
          </div>
        </div>
      </>
  );
}