"use client";

import * as React from "react";
import Link from "next/link";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { DialogTitle } from "@/components/ui/dialog";
import { Logo } from "@/components/Logo";

export const Header = () => {
    const { setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const pathname = usePathname();
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/topup", label: "Top-Up" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-3 md:pr-20 md:pl-20 text-white z-50">
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
                {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu> */}
            </nav>
            <div className="md:hidden">
                <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                    <DrawerTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
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
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem
                                        onClick={() => setTheme("light")}
                                    >
                                        Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => setTheme("dark")}
                                    >
                                        Dark
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => setTheme("system")}
                                    >
                                        System
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </nav>
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    );
};
