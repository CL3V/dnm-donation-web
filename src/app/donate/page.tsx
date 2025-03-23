"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDonate } from "./hooks";

export default function Donate() {
    const { handleBuyNow, donationOptions } = useDonate();

    return (
        <section className="pt-23 p-6 bg-gradient-to-b from-indigo-900 to-black text-white min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-center flex items-center justify-center gap-2">
                Dragon Nest Mobile: Ascend - Donation
            </h1>
            <p className="mt-2 text-gray-300 text-center max-w-md">
                Select an amount to donate and receive a huge amount of Diamonds
                to enhance your adventure!
            </p>
            <div className="mt-5 flex flex-col items-center bg-gray-900 border border-gray-600 w-full md:max-w-6xl p-5 rounded-2xl shadow-lg">
                <p className="text-gray-200 text-sm md:text-[15px] text-center leading-relaxed">
                    Your generous donations help us keep the server running
                    smoothly, providing an enjoyable experience for all players.
                    Choose an amount to donate and receive a **huge** amount of
                    **Diamonds** to power up your adventure!
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-6xl">
                {donationOptions.map((option, index) => (
                    <Card
                        key={index}
                        className="p-6 text-center bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 shadow-xl rounded-2xl relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-yellow-500 opacity-10 rounded-2xl blur-lg" />
                        <CardContent className="flex flex-col items-center relative z-10">
                            <h2 className="text-3xl font-extrabold text-yellow-400 drop-shadow-lg">
                                {option.diamonds.toLocaleString()} 💎
                            </h2>
                            <p className="text-gray-300 mt-2 text-lg font-semibold">
                                {option.price}
                            </p>
                            <Button
                                className="mt-4 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold shadow-lg rounded-b-md transition-all"
                                onClick={() => handleBuyNow(option)}
                            >
                                Donate Now
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
