import { Link } from "wouter";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import {
  FiArrowRight,
  FiHeart,
  FiStar,
  FiShield,
  FiChevronRight,
} from "react-icons/fi";

function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= SMALL ABOUT HEADER ================= */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14"
        style={{
          backgroundImage: "url('/image/bghead.png')",
        }}
      >
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-white/25"></div>

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 sm:text-base">
            <Link
              href="/"
              className="transition hover:text-[#A85D35]"
            >
              Home
            </Link>

            <FiChevronRight size={16} />

            <span className="font-medium text-[#A85D35]">
              About Us
            </span>
          </div>

          {/* Header Content */}
          <div className="mx-auto mt-8 max-w-4xl text-center sm:mt-9">

            {/* Badge */}
            <span className="inline-flex rounded-full bg-[#f0e3db]/95 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#A85D35] sm:text-sm">
              About Us
            </span>

            {/* Heading */}
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
              About{" "}
              <span className="text-[#A85D35]">
                LILUX
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
              Where little personalities meet beautiful, comfortable,
              and playful fashion.
            </p>

          </div>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20">

        <div className="mx-auto max-w-6xl">

          {/* ================= INTRO ================= */}
          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#A85D35]">
              Welcome to LILUX
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#171717] sm:text-4xl lg:text-5xl">
              Stylish Fashion for{" "}
              <span className="text-[#A85D35]">
                Little Adventures
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              LILUX is a kids fashion brand created for little ones who
              love to play, explore, smile, and express their unique
              personalities. We believe children's clothing should be
              beautiful without compromising on comfort.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
              From everyday outfits to special celebrations, every LILUX
              collection brings together thoughtful designs, quality
              materials, and playful details made for growing little stars.
            </p>

          </div>

          {/* ================= VALUES ================= */}
          <div className="mt-14 grid gap-6 sm:grid-cols-3">

            <div className="rounded-2xl border border-gray-100 bg-[#faf8f6] p-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f0e3db] text-[#A85D35]">
                <FiHeart size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#171717]">
                Made With Love
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Every collection is thoughtfully created with little
                personalities and everyday comfort in mind.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-100 bg-[#faf8f6] p-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f0e3db] text-[#A85D35]">
                <FiStar size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#171717]">
                Quality First
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                We focus on comfortable fabrics, beautiful finishing,
                and quality that fits into everyday childhood moments.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-100 bg-[#faf8f6] p-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f0e3db] text-[#A85D35]">
                <FiShield size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#171717]">
                Comfort Always
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Fashion should let kids move freely, play comfortably,
                and enjoy every little adventure.
              </p>

            </div>

          </div>

          <div className="mt-16 rounded-3xl bg-[#faf8f6] px-6 py-12 text-center sm:px-10 lg:px-20">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#A85D35]">
              Our Mission
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#171717] sm:text-4xl">
              Let Kids Be Kids
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              Our mission is simple — to create kidswear that looks
              beautiful, feels comfortable, and gives little ones the
              freedom to enjoy every moment. We want every LILUX outfit
              to become part of a happy childhood memory.
            </p>

          </div>

          <div className="mt-14 text-center">

            <h2 className="text-2xl font-bold text-[#171717] sm:text-3xl">
              Ready to discover LILUX?
            </h2>

            <p className="mt-3 text-gray-600">
              Explore our latest collection made for little adventures.
            </p>

            <div className="mt-6">
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 rounded-full bg-[#A85D35] px-7 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:bg-[#8f4c2b] hover:shadow-lg"
              >
                Explore Collection

                <FiArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}

export default About;