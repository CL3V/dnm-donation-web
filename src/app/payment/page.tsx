"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Payment() {
    const searchParams = useSearchParams();
    const diamonds = searchParams.get("diamonds");
    const price = searchParams.get("price");
    const router = useRouter();

    const [accountID, setAccountID] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("card");

    const handleConfirmPayment = () => {
        if (!accountID) {
            alert("Please enter your Dragon Nest Mobile account ID.");
            return;
        }
        alert(
            `Payment of ${price} for ${diamonds} diamonds confirmed using ${paymentMethod}!`
        );
        router.push("/");
    };

    return (
        <section className="p-6 bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col items-center justify-center">
            <Card className="p-8 bg-gray-800 border border-gray-700 shadow-lg max-w-md text-center">
                <CardContent>
                    <h1 className="text-3xl font-bold text-yellow-400">
                        Payment Confirmation
                    </h1>
                    <p className="mt-4 text-gray-300 text-lg">
                        You're purchasing:
                    </p>
                    <h2 className="text-2xl font-extrabold mt-2">
                        {diamonds} 💎
                    </h2>
                    <p className="text-xl font-semibold text-yellow-400">
                        {price}
                    </p>

                    <div className="mt-4 text-left">
                        <label className="text-gray-300 text-sm">
                            Dragon Nest Mobile Account ID
                        </label>
                        <Input
                            className="mt-2 w-full bg-gray-700 text-white border-gray-600"
                            placeholder="Enter your account ID"
                            value={accountID}
                            onChange={(e) => setAccountID(e.target.value)}
                        />
                    </div>

                    <div className="mt-4 text-left">
                        <label className="text-gray-300 text-sm">
                            Payment Method
                        </label>
                        <select
                            className="mt-2 w-full bg-gray-700 text-white border-gray-600 p-2 rounded-md"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                            <option value="card">Credit/Debit Card</option>
                            <option value="gcash">GCash</option>
                            <option value="qr">Generate QR Code</option>
                        </select>
                    </div>

                    {paymentMethod === "qr" && (
                        <div className="mt-4 text-center">
                            <p className="text-gray-300">
                                Scan this QR code to complete the payment.
                            </p>
                            <div className="mt-2 bg-white p-4 inline-block rounded-md">
                                <img
                                    src="/qr-placeholder.png"
                                    alt="QR Code"
                                    className="w-32 h-32"
                                />
                            </div>
                        </div>
                    )}

                    <Button
                        className="mt-6 w-full bg-green-500 hover:bg-green-400 text-black font-semibold"
                        onClick={handleConfirmPayment}
                    >
                        Confirm Payment
                    </Button>
                    <Button
                        className="mt-3 w-full bg-red-500 hover:bg-red-400 text-black font-semibold"
                        onClick={() => router.push("/")}
                    >
                        Cancel
                    </Button>
                </CardContent>
            </Card>
        </section>
    );
}
