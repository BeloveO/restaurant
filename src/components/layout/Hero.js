import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className="hero mt-4">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    Nothing<br /> 
                    beats the taste <br />
                    of&nbsp; 
                    <span className="text-primary">
                        Home
                    </span>
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    Nothing hits quite like that taste from your home. Nothing cures all like food
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="bg-primary uppercase flex items-center gap-2 text-white px-8 py-2 rounded-full">
                        Order now 
                        <Right />
                    </button>
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image
                    src={'Pondedyam.svg'}
                    layout="fill"
                    objectFit="contain"
                    alt={'pounded yam'}
                />
            </div>
        </section>
    );
}