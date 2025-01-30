"use client";

import { motion } from "framer-motion";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import { Card } from "../components/card";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Trophy, Users, Sparkles } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <div className="relative pb-16">
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={200}
            />
            <Navigation />

            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                {/* Hero Section */}
                <div className="grid gap-8 mx-auto lg:grid-cols-2 h-fit">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center"
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            About Hawkathoon'25
                        </h1>
                        <p className="mt-4 text-lg text-zinc-400">
                            A 24-hour hackathon where innovation meets impact. Join us in this exciting 
                            journey of problem-solving, learning, and creating meaningful solutions.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card>
                            <Image
                                src="/assets/images/poster.png"
                                alt="Hawkathoon Poster"
                                width={600}
                                height={600}
                                className="rounded-lg object-cover w-full"
                            />
                        </Card>
                    </motion.div>
                </div>

                {/* Event Details */}
                <div className="grid gap-8 mx-auto lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card>
                            <div className="p-8 space-y-6">
                                <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
                                    Event Details
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <Calendar className="w-6 h-6 text-blue-400" />
                                        <p className="text-zinc-400">24-hour hackathon starting March 30th, 2025</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Users className="w-6 h-6 text-blue-400" />
                                        <p className="text-zinc-400">Open to all college students</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Trophy className="w-6 h-6 text-blue-400" />
                                        <p className="text-zinc-400">Exciting prizes worth ₹50,000</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card>
                            <div className="p-8 space-y-6">
                                <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
                                    Why Participate?
                                </h2>
                                <ul className="space-y-4 text-zinc-400">
                                    <li className="flex items-center space-x-3">
                                        <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                        <span>Hands-on experience with cutting-edge technologies</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                        <span>Network with industry experts and fellow developers</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                        <span>Win exciting prizes and recognition</span>
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </motion.div>
                </div>

                {/* About Organizers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <Card>
                        <div className="p-8 text-center space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                                About Omdena Student Chapter
                            </h2>
                            <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
                                The Omdena Student Chapter is dedicated to fostering innovation and 
                                technical excellence among students. Through events like Hawkathoon, 
                                we aim to create a platform for students to showcase their skills and 
                                create meaningful solutions to real-world problems.
                            </p>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </div>
        </div>
    );
}

import { Brain, Heart, Lightbulb } from 'lucide-react';
import {redirect} from "next/navigation";

const features = [
    {
        icon: Brain,
        title: "Innovation First",
        description:
            "Pushing the boundaries of what's possible in prosthetic technology through continuous research and development.",
    },
    {
        icon: Heart,
        title: "Patient-Centered",
        description:
            "Every solution is tailored to meet the unique needs and aspirations of each individual we serve.",
    },
    {
        icon: Lightbulb,
        title: "Accessibility",
        description:
            "Making cutting-edge prosthetic technology accessible and affordable for those who need it most.",
    },
];

