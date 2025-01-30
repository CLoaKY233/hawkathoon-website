"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Particles from "../components/particles";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const images = [
    { src: '/assets/images/1.webp', alt: 'Gallery Image' },
    { src: '/assets/images/2.jpg', alt: 'Gallery Image' },
    { src: '/assets/images/3.jpg', alt: 'Gallery Image' },
    { src: '/assets/images/4.jpg', alt: 'Gallery Image' },
    { src: '/assets/images/5.jpg', alt: 'Gallery Image' },
    { src: '/assets/images/6.jpg', alt: 'Gallery Image' },
    { src: '/assets/images/7.jpg', alt: 'Gallery Image' },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">

        <div className="relative pb-16">
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={200}
            />
            <Navigation />

            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Image Gallery
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        A showcase of our innovative prosthetic designs and the lives they've touched.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.src}
                            initial={{  y: 20 }}
                            animate={{  y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card>
                                <div
                                    className="relative overflow-hidden cursor-pointer"
                                    onClick={() => setSelectedImage(image.src)}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={400}
                                        height={300}
                                        className="object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-110"
                                    />
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        <Image
                            src={selectedImage}
                            alt="Enlarged gallery image"
                            width={800}
                            height={600}
                            className="max-w-full max-h-[90vh] object-contain rounded-xl"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-2xl"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
        </div>
    );
}

