import { Link } from "wouter";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";

function ContactNavbar() {
  return (
    <nav className="border-b border-[#E9DED4] bg-white px-5 py-5 md:px-8 lg:px-12 xl:px-14">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between">

        {/* LOGO */}
        <Link href="/home">
          <h1 className="font-logo cursor-pointer text-2xl text-[#A85D35] md:text-3xl">
            LILUX
          </h1>
        </Link>

        {/* NAVIGATION */}
        <div className="hidden items-center gap-8 font-medium text-[#2F2A26] lg:flex">

          <Link href="/home">
            <span className="cursor-pointer transition hover:text-[#A85D35]">
              Home
            </span>
          </Link>

          <Link href="/products">
            <span className="cursor-pointer transition hover:text-[#A85D35]">
              Shop
            </span>
          </Link>

          <Link href="/about">
            <span className="cursor-pointer transition hover:text-[#A85D35]">
              About
            </span>
          </Link>

          <Link href="/blog">
            <span className="cursor-pointer transition hover:text-[#A85D35]">
              Blog
            </span>
          </Link>

          <Link href="/contact">
            <span className="font-semibold text-[#A85D35]">
              Contact
            </span>
          </Link>

        </div>

        {/* ICONS */}
        <div className="flex items-center gap-2 md:gap-3">

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] text-[#3D352F] transition hover:text-[#A85D35] md:h-11 md:w-11">
            <FiSearch size={19} />
          </button>

          <Link href="/wishlist">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] text-[#3D352F] transition hover:text-[#A85D35] md:h-11 md:w-11">
              <FiHeart size={19} />
            </button>
          </Link>

          <Link href="/cart">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] text-[#3D352F] transition hover:text-[#A85D35] md:h-11 md:w-11">
              <FiShoppingBag size={19} />
            </button>
          </Link>

          <Link href="/login">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] text-[#3D352F] transition hover:text-[#A85D35] md:h-11 md:w-11">
              <FiUser size={19} />
            </button>
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default ContactNavbar;