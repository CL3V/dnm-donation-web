import Image from "next/image";

export const Logo = () => {
    return (
        <div className="flex flex-row items-center justify-center select-none">
            <Image
                src="/images/logo.png"
                alt="Dragonest M Ascend"
                width={90}
                height={90}
                draggable="false"
            />
            <h1 className="text-[15px] font-bold w-[80px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Dragonest M Ascend
            </h1>
        </div>
    );
};
