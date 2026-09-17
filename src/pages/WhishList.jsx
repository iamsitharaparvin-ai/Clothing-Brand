import { Link } from "wouter";
import {
  FiHeart,
  FiChevronRight,
  FiShoppingBag,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function WishList() {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= NAVBAR ================= */}
      <Navbar />


      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-9 sm:px-6 sm:py-11 lg:px-10 lg:py-12"
        style={{
          backgroundImage: "url('/image/bghead.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/35"></div>

        <div className="relative z-10 mx-auto max-w-7xl">


          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 sm:text-sm">

            <Link
              href="/"
              className="transition hover:text-[#A85D35]"
            >
              Home
            </Link>

            <FiChevronRight size={14} />

            <span className="font-medium text-[#A85D35]">
              Wishlist
            </span>

          </div>

          {/* ================= TITLE ================= */}
          <div className="mx-auto mt-7 max-w-3xl text-center sm:mt-8">

            <span className="inline-flex rounded-full bg-[#f0e3db]/95 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A85D35] sm:px-5 sm:py-2 sm:text-xs">
              Wishlist
            </span>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
              My <span className="text-[#A85D35]">Wishlist</span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-gray-600 sm:text-sm lg:text-base">
              Save your favorite kids fashion pieces and find them
              easily whenever you're ready to shop.
            </p>

          </div>

        </div>
      </section>

      <main className="flex min-h-[500px] items-center justify-center px-4 py-16 sm:py-20">

        <div className="flex w-full max-w-md flex-col items-center text-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#A85D35]/10 sm:h-28 sm:w-28">
            <FiHeart
              size={42}
              strokeWidth={1.5}
              className="text-[#A85D35] sm:h-12 sm:w-12"
            />
          </div>

          <h2 className="mt-7 text-2xl font-bold text-gray-900 sm:text-3xl">
            Your Wishlist is Empty
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
            You haven't added any products to your wishlist yet.
            Explore our collection and save your favorite items.
          </p>

          <Link
            href="/products"
            className="group mt-7 flex items-center gap-2 rounded-xl bg-[#A85D35] px-7 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-[#8f4e2d] hover:shadow-md"
          >
            <FiShoppingBag
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />

            Continue Shopping
          </Link>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default WishList;