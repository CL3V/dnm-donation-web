import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Landing() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-gray-900 to-black text-white">
            <main className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center text-center sm:text-left">
                <div>
                    <p className="select-none text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                        Welcome to Dragonest M Ascend
                    </p>
                    <p className="mt-4 text-xl text-gray-300">
                        A game that will take you to the next level. Your
                        imagination is the limit.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg">
                            Play Now
                        </Button>
                        <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg">
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 select-none">
                    <p className="text-lg font-semibold text-gray-300">
                        Scan Here to Download
                    </p>
                    <Image
                        src="/images/sampleQr.png"
                        alt="Dragonest M Ascend"
                        width={300}
                        height={300}
                        priority
                        className="bg-gray-100 rounded-lg shadow-lg"
                        draggable="false"
                    />
                </div>
            </main>
        </div>
    );
}
