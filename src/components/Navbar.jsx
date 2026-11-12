
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
    "cursor-pointer transition duration-200 hover:text-[#A85D35]";

  return (
    <nav className="relative z-50 border-b border-[#E9DED4] bg-white px-4 py-3 sm:px-6 lg:px-10">

      {/* MAIN NAVBAR */}
      <div className="flex items-center justify-between gap-3">

        {/* LOGO */}
        <Link href="/home">
          <div
            onClick={closeMenus}
            className="flex shrink-0 cursor-pointer flex-col items-center text-center"
          >
            <img
              src="/image/logolilux.png"
              className="w-14 sm:w-16"
              alt="LILUX Logo"
            />

            <h1 className="m-0 -mt-2 font-logo text-2xl font-bold leading-tight text-[#A85D35] sm:text-3xl">
              LILUX
            </h1>

            <p className="-mt-1 text-[9px] uppercase tracking-widest text-[#A85D35]">
              KIDS CLOTHING
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden xl:flex items-center gap-5 2xl:gap-7 font-medium text-[#2F2A26]">

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
              className="flex items-center gap-1 hover:text-[#A85D35]"
            >
              Shop
              <FiChevronDown
                className={`transition ${shopOpen ? "rotate-180" : ""}`}
              />
            </button>

            {shopOpen && (
              <div className="absolute left-0 top-full z-[100] mt-5 w-64 overflow-hidden rounded-xl border border-[#E9DED4] bg-white shadow-xl">

                <Link href="/Categories">
                  <div onClick={closeMenus} className="flex cursor-pointer items-center justify-between border-b border-[#EFE6DE] px-5 py-4 hover:bg-[#F8F4EF]">
                    Categories
                    <FiChevronRight className="text-[#A85D35]" />
                  </div>
                </Link>

                <Link href="/wishlist">
                  <div onClick={closeMenus} className="flex cursor-pointer items-center justify-between border-b border-[#EFE6DE] px-5 py-4 hover:bg-[#F8F4EF]">
                    Wishlist
                    <FiHeart className="text-[#A85D35]" />
                  </div>
                </Link>

                <Link href="/cart">
                  <div onClick={closeMenus} className="flex cursor-pointer items-center justify-between px-5 py-4 hover:bg-[#F8F4EF]">
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
              className="flex items-center gap-1 hover:text-[#A85D35]"
            >
              Pages
              <FiChevronDown
                className={`transition ${pagesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {pagesOpen && (
              <div className="absolute left-0 top-full z-[100] mt-5 w-52 overflow-hidden rounded-xl border border-[#E9DED4] bg-white py-2 shadow-xl">

                {[
                  ["About", "/about"],
                  ["Register", "/register"],
                  ["Login", "/login"],
                ].map(([name, path]) => (
                  <Link key={path} href={path}>
                    <span
                      onClick={closeMenus}
                      className="block cursor-pointer px-5 py-3 hover:bg-[#F8F4EF] hover:text-[#A85D35]"
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

        {/* SEARCH */}
        <div className="relative hidden w-36 shrink-0 lg:flex 2xl:w-52">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border border-[#EFE6DE] bg-[#F8F4EF] py-3 pl-5 pr-10 text-sm outline-none focus:border-[#B96A3C]"
          />

          <FiSearch
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5C514A]"
          />
        </div>

        {/* RIGHT ICONS */}
        <div className="flex shrink-0 items-center gap-2 text-[#3D352F] sm:gap-3">

          <Link href="/cart">
            <div className="relative cursor-pointer">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] hover:bg-[#F0E3D7] sm:h-11 sm:w-11">
                <FiShoppingBag size={20} />
              </button>
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#A85D35] text-[10px] text-white">
                0
              </span>
            </div>
          </Link>

          <Link href="/wishlist">
            <div className="relative cursor-pointer">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] hover:bg-[#F0E3D7] sm:h-11 sm:w-11">
                <FiHeart size={20} />
              </button>
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#A85D35] text-[10px] text-white">
                0
              </span>
            </div>
          </Link>

          <Link href="/login">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] hover:bg-[#F0E3D7] sm:h-11 sm:w-11">
              <FiUser size={20} />
            </button>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] text-[#A85D35] hover:bg-[#F0E3D7] xl:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX size={23} /> : <FiMenu size={23} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="absolute left-0 top-full z-[100] max-h-[80vh] w-full overflow-y-auto border-t border-[#E9DED4] bg-white px-6 py-5 shadow-xl xl:hidden">

          <div className="flex flex-col gap-4 font-medium text-[#2F2A26]">

            <Link href="/home">
              <span onClick={closeMenus} className="block cursor-pointer hover:text-[#A85D35]">
                Home
              </span>
            </Link>

            {/* MOBILE SHOP */}
            <div>
              <button
                onClick={() => setShopOpen(!shopOpen)}
                className="flex w-full items-center justify-between hover:text-[#A85D35]"
              >
                Shop
                <FiChevronDown className={shopOpen ? "rotate-180" : ""} />
              </button>

              {shopOpen && (
                <div className="mt-3 flex flex-col gap-3 border-l-2 border-[#D4AE8D] pl-4 text-sm text-[#5C514A]">

                  <Link href="/Categories">
                    <span onClick={closeMenus} className="block cursor-pointer">
                      Categories
                    </span>
                  </Link>

                  <Link href="/wishlist">
                    <span onClick={closeMenus} className="block cursor-pointer">
                      Wishlist
                    </span>
                  </Link>

                  <Link href="/cart">
                    <span onClick={closeMenus} className="block cursor-pointer">
                      Cart
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* MOBILE PAGES */}
            <div>
              <button
                onClick={() => setPagesOpen(!pagesOpen)}
                className="flex w-full items-center justify-between hover:text-[#A85D35]"
              >
                Pages
                <FiChevronDown className={pagesOpen ? "rotate-180" : ""} />
              </button>

              {pagesOpen && (
                <div className="mt-3 flex flex-col gap-3 border-l-2 border-[#D4AE8D] pl-4 text-sm text-[#5C514A]">

                  <Link href="/about">
                    <span onClick={closeMenus} className="block cursor-pointer">
                      About
                    </span>
                  </Link>

                  <Link href="/register">
                    <span onClick={closeMenus} className="block cursor-pointer">
                      Register
                    </span>
                  </Link>

                  <Link href="/login">
                    <span onClick={closeMenus} className="block cursor-pointer">
                      Login
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog">
              <span onClick={closeMenus} className="block cursor-pointer hover:text-[#A85D35]">
                Blog
              </span>
            </Link>

            <Link href="/contact">
              <span onClick={closeMenus} className="block cursor-pointer hover:text-[#A85D35]">
                Contact
              </span>
            </Link>

            {/* MOBILE SEARCH */}
            <div className="relative mt-2 flex lg:hidden">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full border border-[#EFE6DE] bg-[#F8F4EF] py-3 pl-5 pr-10 text-sm outline-none focus:border-[#B96A3C]"
              />
              <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2" size={20} />
            </div>

          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
