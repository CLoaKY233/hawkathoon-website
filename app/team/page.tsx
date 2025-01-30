"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../components/nav";
import Particles from "@/app/components/particles";
import { Card } from "../components/card";
import { Github, Mail, Linkedin, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Lay Sheth",
    role: "Hardware Wizard",
    image: "/assets/images/laysheth.jpeg",
    socials: [
      {
        icon: <Github size={20} />,
        href: "https://github.com/cloaky233",
        label: "GitHub",
      },
      {
        icon: <Linkedin size={20} />,
        href: "https://linkedin.com/in/cloaky233",
        label: "LinkedIn",
      },
      {
        icon: <Mail size={20} />,
        href: "mailto:laysheth1@gmail.com",
        label: "Email",
      },
    ],
  },
  {
    name: "Arpit Sengar",
    role: "The Wisdom",
    image: "/assets/images/chill-guy.png",
    socials: [
      {
        icon: <Github size={20} />,
        href: "https://github.com/arpy8",
        label: "GitHub",
      },
      {
        icon: <Linkedin size={20} />,
        href: "https://linkedin.com/in/arpitsengar",
        label: "LinkedIn",
      },
      {
        icon: <Mail size={20} />,
        href: "mailto:arpitsengar2022@vitbhopal.ac.in ",
        label: "Email",
      },
    ],
  },
  {
    name: "Riya Singh",
    role: "Research Ninja I",
    image: "/assets/images/riya.jpg",
    socials: [
      {
        icon: <Github size={20} />,
        href: "https://github.com/ravenn3105",
        label: "GitHub",
      },
      {
        icon: <Linkedin size={20} />,
        href: "https://www.linkedin.com/in/riyasingh3105/",
        label: "LinkedIn",
      },
      {
        icon: <Mail size={20} />,
        href: "mailto:riyasingh.2022@vitbhopal.ac.in",
        label: "Email",
      },
    ],
  },
  {
    name: "Bhagyashree Tanwar",
    role: "Research Ninja II",
    image: "/assets/images/bhagyashree.webp",
    socials: [
      {
        icon: <Github size={20} />,
        href: "https://github.com/cloaky233",
        label: "GitHub",
      },
      {
        icon: <Linkedin size={20} />,
        href: "https://linkedin.com/in/bhagyashree-tanwar-494540251",
        label: "LinkedIn",
      },
      {
        icon: <Mail size={20} />,
        href: "mailto:bhagyashreetanwar2022@vitbhopal.ac.in",
        label: "Email",
      },
    ],
  },
  {
    name: "Kaustubh Agrawal",
    role: "The Anti-apple guy",
    image: "/assets/images/kaustubh.jpeg",
    socials: [
      {
        icon: <Github size={20} />,
        href: "https://github.com/cloaky233",
        label: "GitHub",
      },
      {
        icon: <Linkedin size={20} />,
        href: "https://linkedin.com/in/cloaky233",
        label: "LinkedIn",
      },
      {
        icon: <Mail size={20} />,
        href: "mailto:laysheth1@gmail.com",
        label: "Email",
      },
    ],
  },
  {
    name: "Aryan Kumar Singh",
    role: "3D Sorcerer",
    image: "/assets/images/aryan.jpg",
    socials: [
      {
        icon: <Github size={20} />,
        href: "https://github.com/Nightstorm26",
        label: "GitHub",
      },
      {
        icon: <Instagram size={20} />,
        href: "https://www.instagram.com/_aryan_kumar.singh",
        label: "LinkedIn",
      },
      {
        icon: <Mail size={20} />,
        href: "mailto:prem.lata13rs@gmail.com",
        label: "Email",
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <div className="relative pb-16">
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={200}
        />
        <Navigation />

        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-zinc-400">
              The talented individuals behind our success.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className="relative w-full h-full p-4 md:p-8 flex flex-col items-center justify-center transform transition duration-300 hover:scale-105">
                    <div className="w-32 h-32 mb-4 relative overflow-hidden rounded-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-zinc-400">{member.role}</p>
                    <div className="flex mt-4 space-x-4">
                      {member.socials.map((social, socialIndex) => (
                        <Link
                          key={socialIndex}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                        >
                          <span className="sr-only">{social.label}</span>
                          {social.icon}
                        </Link>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
