"use client";

import { useRouter } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface TopUpOption {
    diamonds: number;
    price: string;
}

const topUpOptions: TopUpOption[] = [
    { diamonds: 100, price: "$0.99" },
    { diamonds: 500, price: "$4.99" },
    { diamonds: 1000, price: "$9.99" },
    { diamonds: 5000, price: "$49.99" },
    { diamonds: 7500, price: "$74.99" },
    { diamonds: 10000, price: "$99.99" },
    { diamonds: 15000, price: "$149.99" },
    { diamonds: 20000, price: "$199.99" },
];

export default function TopUp() {
    const router = useRouter();

    const handleBuyNow = (option: TopUpOption) => {
        router.push(
            `/payment?diamonds=${option.diamonds}&price=${option.price}`
        );
    };

    return (
        <section className="pt-30 p-6 bg-gradient-to-b from-indigo-900 to-black text-white min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-center flex items-center justify-center gap-2">
                Dragon Nest Mobile: Ascend - Top Up
            </h1>
            <p className="mt-2 text-gray-300 text-center max-w-md">
                Select an amount to top up your account and enhance your
                adventure!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 p-4 w-full max-w-6xl">
                {topUpOptions.map((option, index) => (
                    <Card
                        key={index}
                        className="p-6 text-center bg-gray-800 border border-gray-700 shadow-lg hover:scale-105 transition-transform"
                    >
                        <CardContent className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-yellow-400">
                                {option.diamonds} 💎
                            </h2>
                            <p className="text-gray-300 mt-2 text-lg">
                                {option.price}
                            </p>
                            <Button
                                className="mt-4 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
                                onClick={() => handleBuyNow(option)}
                            >
                                Buy Now
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
