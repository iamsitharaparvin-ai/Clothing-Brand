import { Link } from "wouter";
import { FiArrowRight } from "react-icons/fi";

function AboutSection() {
  return (
    <section className="w-full overflow-hidden bg-white">

      {/* ================= MAIN ABOUT SECTION ================= */}
      <div className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* ================= ONE IMAGE ================= */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/image/blogtitle.png"
              alt="LILUX Kids Fashion"
              className="h-[320px] w-full max-w-[520px] rounded-[0_50px_0_50px] object-cover shadow-sm sm:h-[420px] lg:h-[500px]"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="max-w-2xl">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#A85D35]">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#171717] sm:text-4xl lg:text-5xl">
              Fashion Made for
              <br />
              <span className="text-[#A85D35]">
                Little Adventures
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              Welcome to LILUX, where little personalities meet beautiful
              fashion. We create stylish, comfortable, and thoughtfully
              designed clothing for little ones who love to move, play,
              and explore.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
              From everyday outfits to special occasions, our collections
              bring together comfort, quality, and playful style for every
              little adventure.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-[#A85D35] px-7 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:bg-[#8f4c2b] hover:shadow-lg"
              >
                Read More

                <FiArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default AboutSection;