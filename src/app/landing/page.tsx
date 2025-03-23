"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaDiscord, FaFacebook, FaTwitter, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Landing() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center pt-20 p-5 sm:p-12 md:p-20 text-white relative gap-5 bg-black">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "url('https://images6.alphacoders.com/112/1120226.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "darken",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    maskImage:
                        "linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,0)), linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                    WebkitMaskImage:
                        "linear-gradient(to left, rgba(0,0,0,0.4), rgba(0,0,0,0)), linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                }}
            />
            {/* <div className="position:fixed flex w-full bg-amber-700 max-w-7xl text-white text-xl font-bold py-1 px-6 rounded-lg shadow-lg mt-20 lg:mt-0 md:mt-0 sm:mt-10 justify-center items-center border-2 border-yellow-700 z-10 ">
                <span>🔥 Donate Now and Get Exclusive Rewards! 🔥</span>
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-sm text-sm shadow-lg"
                >
                    Donate
                </motion.button>
            </div> */}
            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left w-full max-w-7xl relative z-10 "
            >
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: -3 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="select-none text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-800"
                    >
                        Welcome to Dragonest M Ascend
                    </motion.p>
                    <p className="mt-4 text-md text-gray-200 w-full lg:w-2/3 md:w-2/3 text-center lg:text-left md:text-left">
                        An immersive MMORPG where you forge your destiny. Battle
                        fearsome enemies, explore vast lands, and become the
                        strongest warrior.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-400 text-white px-6 py-3 rounded-md text-sm shadow-lg w-37"
                        >
                            <FaPlay /> Play Now
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-md text-sm shadow-lg w-37"
                        >
                            <FaDiscord /> Join Discord
                        </motion.button>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="https://www.facebook.com"
                            className="text-gray-300 hover:text-white text-2xl"
                        >
                            <FaFacebook />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="https://www.twitter.com"
                            className="text-gray-300 hover:text-white text-2xl"
                        >
                            <FaTwitter />
                        </motion.a>
                    </div>
                </div>
                {/* <div className="flex flex-col justify-center items-center gap-4 select-none">
                    <p className="text-md sm:text-lg font-semibold text-white-100">
                        Scan Here to Download
                    </p>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/images/qr-code.png"
                            alt="Dragonest M Ascend QR Code"
                            width={250}
                            height={250}
                            priority
                            className="bg-gray-100 rounded-lg shadow-lg"
                            draggable="false"
                        />
                    </motion.div>
                    <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start items-center"></div>
                </div> */}
            </motion.main>
        </div>
    );
}
