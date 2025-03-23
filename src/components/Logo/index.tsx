"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
    const router = useRouter();

    return (
        <div
            className="flex flex-row gap-2 items-center justify-center select-none"
            onClick={() => router.push("/")}
        >
            <Image
                src="/images/logo.png"
                alt="DNM:Ascend"
                width={50}
                height={50}
                draggable="false"
            />
            <h1 className="text-[15px] font-bold bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                DNM:Ascend
            </h1>
        </div>
    );
};
