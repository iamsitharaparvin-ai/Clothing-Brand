import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Hero() {
  const slides = [
    {
      image: "/image/Baanner.jpeg",
      subtitle: "Exclusive Offer",
      title1: "Fashion For",
      title2: "Every Style",
      price: "$15.99",
      discount: "SAVE 30%",
    },
    {
      image: "/image/banner3.png",
      subtitle: "New Collection",
      title1: "Trends Made",
      title2: "For Little Stars",
      price: "$19.99",
      discount: "SAVE 40%",
    },
    {
      image: "/image/Banner1.png",
      subtitle: "Special Offer",
      title1: "Little Style,",
      title2: "Big Smiles",
      price: "$24.99",
      discount: "SAVE 50%",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#FAF7F2] px-3 py-6 md:px-6">
      <div
        className="
          relative mx-auto
          h-[500px]
          max-w-[1600px]
          overflow-hidden
          rounded-[28px]
          md:h-[600px]
          lg:h-[680px]
        "
      >
        {/* ================= SLIDES ================= */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="
                relative
                flex
                h-full
                min-w-full
                items-center
                overflow-hidden
                bg-[#FAF7F2]
              "
            >
              {/* ================= BANNER IMAGE ================= */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#FAF7F2]">
                <img
                  src={slide.image}
                  alt={slide.title1}
                  className={`
                    h-full
                    w-full
                    object-contain
                    object-center
                    ${
                      currentSlide === index
                        ? "animate-kids-motion"
                        : ""
                    }
                  `}
                />
              </div>

              {/* ================= LIGHT OVERLAY ================= */}
              <div className="absolute inset-0 bg-[#D4AE8D]/5" />

              {/* ================= CONTENT ================= */}
              <div
                className="
                  relative
                  z-10
                  mx-auto
                  w-full
                  max-w-[1600px]
                  px-7
                  md:px-16
                  lg:px-28
                "
              >
                <div
                  key={currentSlide}
                  className="max-w-xl text-left"
                >
                  {/* Subtitle */}
                  <div
                    className="mb-5 animate-slide-left"
                    style={{
                      animationDelay: "0.7s",
                      opacity: 0,
                    }}
                  >
                    <p
                      className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[2px]
                        text-[#A85D35]
                        md:text-base
                        lg:text-lg
                      "
                    >
                      {slide.subtitle}
                    </p>

                    <div className="mt-3 h-[2px] w-16 bg-[#A85D35]" />
                  </div>

                  {/* Main Heading */}
                  <h1
                    className="
                      animate-slide-up
                      font-heading
                      text-5xl
                      font-bold
                      leading-tight
                      text-[#2F2A26]
                      md:text-6xl
                      lg:text-7xl
                    "
                    style={{
                      animationDelay: "0.9s",
                      opacity: 0,
                    }}
                  >
                    {slide.title1}
                  </h1>

                  {/* Second Heading */}
                  <h2
                    className="
                      mt-2
                      animate-slide-up
                      font-heading
                      text-4xl
                      font-semibold
                      leading-tight
                      text-[#A85D35]
                      md:text-5xl
                      lg:text-6xl
                    "
                    style={{
                      animationDelay: "1.1s",
                      opacity: 0,
                    }}
                  >
                    {slide.title2}
                  </h2>

                  {/* Price + Discount */}
                  <div
                    className="
                      mt-7
                      flex
                      flex-wrap
                      items-center
                      gap-4
                      animate-slide-up
                    "
                    style={{
                      animationDelay: "1.3s",
                      opacity: 0,
                    }}
                  >
                    <span
                      className="
                        text-base
                        font-medium
                        text-[#5C514A]
                        md:text-lg
                      "
                    >
                      Starting From
                    </span>

                    <span
                      className="
                        text-3xl
                        font-bold
                        text-[#A85D35]
                        md:text-4xl
                      "
                    >
                      {slide.price}
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-[#A85D35]
                        px-5
                        py-2.5
                        text-xs
                        font-bold
                        text-white
                        shadow-md
                        md:px-6
                        md:text-sm
                      "
                    >
                      {slide.discount}
                    </span>
                  </div>

                  {/* Shop Button */}
                  <button
                    className="
                      mt-8
                      animate-fade-scale
                      rounded-full
                      bg-[#A85D35]
                      px-9
                      py-3.5
                      text-base
                      font-semibold
                      text-white
                      shadow-lg
                      transition-all
                      duration-300
                      hover:scale-[1.03]
                      hover:bg-[#8F4B29]
                      md:px-14
                      md:py-4
                      md:text-lg
                    "
                    style={{
                      animationDelay: "1.5s",
                      opacity: 0,
                    }}
                  >
                    Shop Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= PREVIOUS BUTTON ================= */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="
            absolute
            left-4
            top-1/2
            z-20
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-[#3D352F]
            shadow-lg
            transition-all
            duration-300
            hover:bg-[#A85D35]
            hover:text-white
            md:left-7
            md:h-14
            md:w-14
          "
        >
          <FiChevronLeft size={26} />
        </button>

        {/* ================= NEXT BUTTON ================= */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="
            absolute
            right-4
            top-1/2
            z-20
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-[#3D352F]
            shadow-lg
            transition-all
            duration-300
            hover:bg-[#A85D35]
            hover:text-white
            md:right-7
            md:h-14
            md:w-14
          "
        >
          <FiChevronRight size={26} />
        </button>

        {/* ================= DOTS ================= */}
        <div
          className="
            absolute
            bottom-7
            left-1/2
            z-20
            flex
            -translate-x-1/2
            items-center
            gap-3
          "
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                rounded-full
                transition-all
                duration-300
                ${
                  currentSlide === index
                    ? "h-3 w-9 bg-[#A85D35]"
                    : "h-3 w-3 border border-[#D4AE8D] bg-white/90"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;