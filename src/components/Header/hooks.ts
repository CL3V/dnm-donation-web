"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export const useHeader = () => {
    const [mounted, setMounted] = React.useState(false);
    const pathname = usePathname();
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);

    React.useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/donate", label: "Donate" },
        { href: "/about", label: "About" },
        { href: "/login", label: "Login" },
    ];

    return {
        navLinks,
        pathname,
        isDrawerOpen,
        setIsDrawerOpen,
        isVisible,
        mounted,
    };
};
