"use client";

import { Suspense } from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePayment } from "./hooks";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

function PaymentContent() {
    const {
        diamonds,
        price,
        accountID,
        paymentMethod,
        setAccountID,
        setPaymentMethod,
        handleConfirmPayment,
        navigateToDonate,
    } = usePayment();

    return (
        <section className="p-6 bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col items-center pt-30 md:justify-center md:pt-0">
            <Card className="p-8 bg-gray-800 border border-gray-700 shadow-lg max-w-md text-center">
                <CardContent>
                    <h1 className="text-3xl font-bold text-yellow-400">
                        Payment Confirmation
                    </h1>
                    <p className="mt-4 text-gray-300 text-lg">
                        You&apos;re purchasing:
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
                        <Select
                            onValueChange={setPaymentMethod}
                            value={paymentMethod}
                        >
                            <SelectTrigger className="mt-2 w-full bg-gray-700 text-white border-gray-600">
                                <SelectValue placeholder="Select a payment method" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="card">
                                    Credit/Debit Card
                                </SelectItem>
                                <SelectItem value="gcash">GCash</SelectItem>
                                <SelectItem value="qr">
                                    Generate QR Code
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {paymentMethod === "qr" && (
                        <div className="mt-4 text-center">
                            <p className="text-gray-300">
                                Scan this QR code to complete the payment.
                            </p>
                            <div className="mt-2 bg-white p-4 inline-block rounded-md">
                                <Image
                                    src="/qr-placeholder.png"
                                    alt="QR Code"
                                    width={128}
                                    height={128}
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
                        onClick={navigateToDonate}
                    >
                        Cancel
                    </Button>
                </CardContent>
            </Card>
        </section>
    );
}

export default function Payment() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PaymentContent />
        </Suspense>
    );
}
