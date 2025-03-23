"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const usePayment = () => {
    const searchParams = useSearchParams();
    const diamonds = searchParams.get("diamonds");
    const price = searchParams.get("price");
    const router = useRouter();

    const [accountID, setAccountID] = React.useState("");
    const [paymentMethod, setPaymentMethod] = React.useState("card");

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

    const navigateToDonate = () => {
        router.push("/donate");
    };

    return {
        diamonds,
        price,
        accountID,
        paymentMethod,
        setAccountID,
        setPaymentMethod,
        handleConfirmPayment,
        navigateToDonate,
    };
};
