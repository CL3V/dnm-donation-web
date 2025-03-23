"use client";

import { useRouter } from "next/navigation";
import { DonationOption } from "./donation.types";

export const useDonate = () => {
    const router = useRouter();

    const handleBuyNow = (option: DonationOption) => {
        router.push(
            `/payment?diamonds=${option.diamonds}&price=${option.price}`
        );
    };

    const donationOptions: DonationOption[] = [
        { diamonds: 1000, price: "$0.99" },
        { diamonds: 5000, price: "$4.99" },
        { diamonds: 10000, price: "$9.99" },
        { diamonds: 50000, price: "$49.99" },
        { diamonds: 75000, price: "$74.99" },
        { diamonds: 100000, price: "$99.99" },
        { diamonds: 150000, price: "$149.99" },
        { diamonds: 200000, price: "$199.99" },
    ];

    return { donationOptions, handleBuyNow };
};
