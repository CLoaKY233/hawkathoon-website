"use client";

import React from "react";
import Link from "next/link";
import { Loader } from "lucide-react";
import Particles from "@/app/components/particles";

export default function MaintenancePage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen flex flex-col justify-center items-center p-4 md:p-8 relative">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-100">
          We'll be back soon!
        </h1>
        <p className="text-xl mb-8 text-zinc-400">
          We're currently working on something awesome.
        </p>
        <p className="text-lg mb-6 text-zinc-400">Stay Tuned!!!</p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-zinc-900 bg-zinc-100 rounded-md hover:bg-zinc-200 transition-colors duration-300"
        >
          refresh
          <Loader className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
