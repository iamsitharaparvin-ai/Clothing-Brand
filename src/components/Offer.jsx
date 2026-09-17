import { Link } from "wouter";

function Offer() {
    return (
        <section className="w-full bg-white px-4 py-8 md:px-10 md:py-14">
            <div className="relative mx-auto max-w-[1800px] overflow-hidden rounded-[30px]">

                <img
                    src="/image/offer-banner.png"
                    alt="Offer Banner"
                    className="w-full h-auto rounded-[30px]"
                />

                <div className="absolute inset-0 bg-white/5"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

                    <div className="mb-2 flex items-center gap-2 md:mb-3 md:gap-3">
                        <span className="h-[1px] w-6 bg-black md:w-12"></span>

                        <p className=" px-3 py-1 text-[7px] font-bold tracking-[2px] text-black sm:text-[9px] md:px-5 md:py-2 md:text-xs">
                            END OF SEASON
                        </p>

                        <span className="h-[1px] w-6 bg-black md:w-12"></span>
                    </div>

                    <h2 className="font-serif text-5xl font-black italic leading-none tracking-[-3px] text-black sm:text-7xl md:text-[100px] lg:text-[130px]">
                        SALE
                    </h2>

                    <p className="mt-1 text-[7px] font-semibold uppercase tracking-[3px] text-[#A85D35] sm:text-[9px] md:mt-2 md:text-xs md:tracking-[6px]">
                        Biggest Fashion Event
                    </p>

                    <div className="mt-2 flex items-center justify-center gap-2 md:mt-3 md:gap-4">

                        <span className="text-[8px] font-bold uppercase tracking-[2px] text-black sm:text-xs md:text-base">
                            UP TO
                        </span>

                        <span className="font-serif text-5xl font-black italic leading-none text-[#A85D35] sm:text-6xl md:text-8xl">
                            70%
                        </span>

                        <span className="text-3xl font-black italic leading-none text-black sm:text-4xl md:text-6xl">
                            OFF
                        </span>
                    </div>

                    <p className="mt-2 text-[6px] font-medium tracking-[1px] text-black sm:text-[8px] md:mt-3 md:text-xs md:tracking-[2px]">
                        *EXCLUDES SELECTED LINES
                    </p>

                    <Link
                        href="/products"
                        className="mt-3 rounded-full bg-[#A85D35] px-4 py-2 text-[8px] font-bold tracking-[2px] text-white shadow-md transition duration-300 hover:scale-105 hover:bg-[#8f4825] sm:px-6 sm:text-[10px] md:mt-5 md:px-8 md:py-3 md:text-xs"
                    >
                        SHOP NOW 
                    </Link>

                </div>
            </div>
        </section>
    );
}

export default Offer;