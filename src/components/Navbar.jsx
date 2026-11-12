
import { Link } from "wouter";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenus = () => {
    setShopOpen(false);
    setPagesOpen(false);
    setMobileOpen(false);
  };

  const linkStyle =
    "cursor-pointer whitespace-nowrap text-[15px] xl:text-base font-medium text-[#2F2A26] transition hover:text-[#A85D35]";

  return (
    <nav className="relative z-50 h-[95px] border-b border-[#E9DED4] bg-white px-3 sm:px-5 lg:h-[115px] lg:px-6 xl:px-8 2xl:px-10">

      {/* MAIN NAVBAR */}
      <div className="flex h-full w-full items-center justify-between gap-2">

        {/* LOGO */}
        <Link href="/home">
          <div
            onClick={closeMenus}
            className="flex w-[110px] shrink-0 cursor-pointer flex-col items-center justify-center text-center"
          >
            <img
              src="/image/logolilux.png"
              alt="LILUX Logo"
              className="h-9 w-auto object-contain lg:h-10"
            />

            <h1 className="-mt-1.5 font-logo text-[32px] font-bold leading-none text-[#A85D35] lg:text-[35px]">
              LILUX
            </h1>

            <p className="mt-0.5 text-[9px] uppercase tracking-[2px] text-[#A85D35]">
              KIDS CLOTHING
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden flex-1 items-center justify-center gap-3 font-medium text-[#2F2A26] lg:flex xl:gap-4 2xl:gap-5">

          <Link href="/home">
            <span className={linkStyle}>Home</span>
          </Link>

          {/* SHOP DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => {
                setShopOpen(!shopOpen);
                setPagesOpen(false);
              }}
              className="flex items-center gap-1 whitespace-nowrap text-[15px] hover:text-[#A85D35] xl:text-base"
            >
              Shop
              <FiChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  shopOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {shopOpen && (
              <div className="absolute left-0 top-full z-[100] mt-4 w-60 overflow-hidden rounded-xl border border-[#E9DED4] bg-white shadow-xl">

                <Link href="/Categories">
                  <div
                    onClick={closeMenus}
                    className="flex cursor-pointer items-center justify-between border-b border-[#EFE6DE] px-5 py-3.5 hover:bg-[#F8F4EF]"
                  >
                    Categories
                    <FiChevronRight className="text-[#A85D35]" />
                  </div>
                </Link>

                <Link href="/wishlist">
                  <div
                    onClick={closeMenus}
                    className="flex cursor-pointer items-center justify-between border-b border-[#EFE6DE] px-5 py-3.5 hover:bg-[#F8F4EF]"
                  >
                    Wishlist
                    <FiHeart className="text-[#A85D35]" />
                  </div>
                </Link>

                <Link href="/cart">
                  <div
                    onClick={closeMenus}
                    className="flex cursor-pointer items-center justify-between px-5 py-3.5 hover:bg-[#F8F4EF]"
                  >
                    Cart
                    <FiShoppingBag className="text-[#A85D35]" />
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* PAGES DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => {
                setPagesOpen(!pagesOpen);
                setShopOpen(false);
              }}
              className="flex items-center gap-1 whitespace-nowrap text-[15px] hover:text-[#A85D35] xl:text-base"
            >
              Pages
              <FiChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  pagesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {pagesOpen && (
              <div className="absolute left-0 top-full z-[100] mt-4 w-48 overflow-hidden rounded-xl border border-[#E9DED4] bg-white py-2 shadow-xl">

                {[
                  ["About", "/about"],
                  ["Register", "/register"],
                  ["Login", "/login"],
                ].map(([name, path]) => (
                  <Link key={path} href={path}>
                    <span
                      onClick={closeMenus}
                      className="block cursor-pointer px-5 py-3 text-sm hover:bg-[#F8F4EF] hover:text-[#A85D35]"
                    >
                      {name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog">
            <span className={linkStyle}>Blog</span>
          </Link>

          <Link href="/contact">
            <span className={linkStyle}>Contact</span>
          </Link>
        </div>

        {/* SEARCH BAR */}
        <div className="relative hidden w-[145px] shrink-0 lg:flex xl:w-[180px] 2xl:w-[200px]">
          <input
            type="text"
            placeholder="Search..."
            className="h-[44px] w-full rounded-full border border-[#EFE6DE] bg-[#F8F4EF] pl-5 pr-10 text-sm outline-none transition focus:border-[#B96A3C]"
          />

          <FiSearch
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#5C514A]"
          />
        </div>

        {/* RIGHT ICONS */}
        <div className="flex shrink-0 items-center gap-1.5 text-[#3D352F] sm:gap-2">

          {/* CART */}
          <Link href="/cart">
            <div className="relative cursor-pointer">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] transition hover:bg-[#F0E3D7] lg:h-11 lg:w-11">
                <FiShoppingBag size={20} />
              </button>

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#A85D35] text-[10px] font-medium text-white">
                0
              </span>
            </div>
          </Link>

          {/* WISHLIST */}
          <Link href="/wishlist">
            <div className="relative cursor-pointer">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] transition hover:bg-[#F0E3D7] lg:h-11 lg:w-11">
                <FiHeart size={20} />
              </button>

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#A85D35] text-[10px] font-medium text-white">
                0
              </span>
            </div>
          </Link>

          {/* USER */}
          <Link href="/login">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] transition hover:bg-[#F0E3D7] lg:h-11 lg:w-11">
              <FiUser size={20} />
            </button>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] text-[#A85D35] transition hover:bg-[#F0E3D7] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET MENU */}
      {mobileOpen && (
        <div className="absolute left-0 top-full z-[100] max-h-[80vh] w-full overflow-y-auto border-t border-[#E9DED4] bg-white px-6 py-5 shadow-xl lg:hidden">

          <div className="flex flex-col gap-4 text-[15px] font-medium text-[#2F2A26]">

            <Link href="/home">
              <span onClick={closeMenus} className="block cursor-pointer hover:text-[#A85D35]">
                Home
              </span>
            </Link>

            {/* MOBILE SHOP */}
            <div>
              <button
                onClick={() => {
                  setShopOpen(!shopOpen);
                  setPagesOpen(false);
                }}
                className="flex w-full items-center justify-between hover:text-[#A85D35]"
              >
                Shop
                <FiChevronDown className={shopOpen ? "rotate-180" : ""} />
              </button>

              {shopOpen && (
                <div className="mt-3 flex flex-col gap-3 border-l-2 border-[#D4AE8D] pl-4 text-sm text-[#5C514A]">

                  <Link href="/Categories">
                    <span onClick={closeMenus} className="block cursor-pointer">Categories</span>
                  </Link>

                  <Link href="/wishlist">
                    <span onClick={closeMenus} className="block cursor-pointer">Wishlist</span>
                  </Link>

                  <Link href="/cart">
                    <span onClick={closeMenus} className="block cursor-pointer">Cart</span>
                  </Link>
                </div>
              )}
            </div>

            {/* MOBILE PAGES */}
            <div>
              <button
                onClick={() => {
                  setPagesOpen(!pagesOpen);
                  setShopOpen(false);
                }}
                className="flex w-full items-center justify-between hover:text-[#A85D35]"
              >
                Pages
                <FiChevronDown className={pagesOpen ? "rotate-180" : ""} />
              </button>

              {pagesOpen && (
                <div className="mt-3 flex flex-col gap-3 border-l-2 border-[#D4AE8D] pl-4 text-sm text-[#5C514A]">

                  <Link href="/about">
                    <span onClick={closeMenus} className="block cursor-pointer">About</span>
                  </Link>

                  <Link href="/register">
                    <span onClick={closeMenus} className="block cursor-pointer">Register</span>
                  </Link>

                  <Link href="/login">
                    <span onClick={closeMenus} className="block cursor-pointer">Login</span>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog">
              <span onClick={closeMenus} className="block cursor-pointer hover:text-[#A85D35]">Blog</span>
            </Link>

            <Link href="/contact">
              <span onClick={closeMenus} className="block cursor-pointer hover:text-[#A85D35]">Contact</span>
            </Link>

            {/* MOBILE SEARCH */}
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="Search..."
                className="h-11 w-full rounded-full border border-[#EFE6DE] bg-[#F8F4EF] pl-5 pr-10 text-sm outline-none focus:border-[#B96A3C]"
              />

              <FiSearch
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5C514A]"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
