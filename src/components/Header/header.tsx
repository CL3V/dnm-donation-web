"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { DialogTitle } from "@/components/ui/dialog";
import { Logo } from "@/components/Logo";
import { useHeader } from "./hooks";

export const Header = () => {
    const {
        navLinks,
        pathname,
        isDrawerOpen,
        setIsDrawerOpen,
        isVisible,
        mounted,
    } = useHeader();

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 pr-5 pl-5 sm:pr-12 sm:pl-12 backdrop-blur-md md:backdrop-blur-none transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
                <Logo />
                <nav className="hidden md:flex items-center gap-6">
                    <ul className="flex items-center gap-6 text-md">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`relative transition-colors duration-200 font-semibold text-md ${
                                        mounted && pathname === href
                                            ? "text-blue-400 after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-[1px] after:bg-blue-400"
                                            : "hover:text-blue-400 after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[1px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="md:hidden">
                    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                        <DrawerTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent className="flex items-center text-center">
                            <DialogTitle className="p-4 text-lg font-semibold">
                                Menu
                            </DialogTitle>
                            <nav className="flex flex-col p-4 gap-4">
                                {navLinks.map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="text-lg font-semibold"
                                        onClick={() => setIsDrawerOpen(false)}
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </header>
    );
};
