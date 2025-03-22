import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 p-2 px-8 sm:px-20 flex justify-between items-center bg-black/50 backdrop-blur-lg shadow-lg text-white z-50">
            <div className="flex flex-row items-center justify-center">
                <Image
                    src="/images/logo.png"
                    alt="Dragonest M Ascend"
                    width={50}
                    height={50}
                />
                <h1 className="text-xl font-bold tracking-wide">
                    Dragonest M Ascend
                </h1>
            </div>
            <nav>
                <ul className="flex gap-6 text-md">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-purple-400 transition-colors duration-200"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/topup"
                            className="hover:text-purple-400 transition-colors duration-200"
                        >
                            Top-Up
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/payment"
                            className="hover:text-purple-400 transition-colors duration-200"
                        >
                            Payment
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
