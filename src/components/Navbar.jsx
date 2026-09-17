import { Link } from "wouter";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="relative z-50 border-b border-[#E9DED4] bg-white px-5 py-5 md:px-6 lg:px-10 xl:px-14">
        <div className="flex items-center">

          <div className="flex-shrink-0">
            <Link href="/home">
              <div className="cursor-pointer">
                <h1 className="font-logo text-2xl text-[#A85D35] md:text-3xl">
                  LILUX
                </h1>
              </div>
            </Link>
          </div>

          <div className="hidden flex-1 xl:block" />

          <div className="hidden flex-shrink-0 items-center gap-7 whitespace-nowrap font-medium text-[#2F2A26] xl:flex">

            <Link href="/home">
              <span className="cursor-pointer transition duration-200 hover:text-[#A85D35]">
                Home
              </span>
            </Link>

            <div className="relative">
              <button
                onClick={() => {
                  setShopOpen(!shopOpen);
                  setPagesOpen(false);
                }}
                className="flex items-center gap-1.5 transition hover:text-[#A85D35]"
              >
                Shop

                <FiChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${shopOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {shopOpen && (
                <div className="absolute left-0 top-full z-[100] mt-7 w-[300px] overflow-hidden rounded-2xl border border-[#E9DED4] bg-white shadow-xl">


                  <Link href="/Categories">
                    <div
                      onClick={() => setShopOpen(false)}
                      className="flex cursor-pointer items-center justify-between border-b border-[#EFE6DE] px-6 py-4 transition hover:bg-[#F8F4EF]"
                    >
                      <span className="font-medium text-[#2F2A26]">
                        Categories
                      </span>

                      <FiChevronRight
                        size={18}
                        className="text-[#A85D35]"
                      />
                    </div>
                  </Link>

                  <Link href="/wishlist">
                    <div
                      onClick={() => setShopOpen(false)}
                      className="flex cursor-pointer items-center justify-between border-b border-[#EFE6DE] px-6 py-4 transition hover:bg-[#F8F4EF]"
                    >
                      <div className="flex items-center gap-4">
                        <FiHeart
                          size={19}
                          className="text-[#A85D35]"
                        />

                        <span className="font-medium">
                          Wishlist
                        </span>
                      </div>

                      <FiChevronRight
                        size={18}
                        className="text-[#A85D35]"
                      />
                    </div>
                  </Link>

                  <Link href="/cart">
                    <div
                      onClick={() => setShopOpen(false)}
                      className="flex cursor-pointer items-center justify-between px-6 py-4 transition hover:bg-[#F8F4EF]"
                    >
                      <div className="flex items-center gap-4">
                        <FiShoppingBag
                          size={19}
                          className="text-[#A85D35]"
                        />

                        <span className="font-medium">
                          Cart
                        </span>
                      </div>

                      <FiChevronRight
                        size={18}
                        className="text-[#A85D35]"
                      />
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => {
                  setPagesOpen(!pagesOpen);
                  setShopOpen(false);
                }}
                className="flex items-center gap-1.5 transition hover:text-[#A85D35]"
              >
                Pages

                <FiChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${pagesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {pagesOpen && (
                <div className="absolute left-0 top-full z-[100] mt-7 w-[210px] overflow-hidden rounded-2xl border border-[#E9DED4] bg-white py-2 shadow-xl">

                  <Link href="/about">
                    <span
                      onClick={() => setPagesOpen(false)}
                      className="block cursor-pointer px-6 py-3.5 transition hover:bg-[#F8F4EF] hover:text-[#A85D35]"
                    >
                      About
                    </span>
                  </Link>

                  <Link href="/register">
                    <span
                      onClick={() => setPagesOpen(false)}
                      className="block cursor-pointer px-6 py-3.5 transition hover:bg-[#F8F4EF] hover:text-[#A85D35]"
                    >
                      Register
                    </span>
                  </Link>

                  <Link href="/login">
                    <span
                      onClick={() => setPagesOpen(false)}
                      className="block cursor-pointer px-6 py-3.5 transition hover:bg-[#F8F4EF] hover:text-[#A85D35]"
                    >
                      Login
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* BLOG */}
            <Link href="/blog">
              <span className="cursor-pointer transition hover:text-[#A85D35]">
                Blog
              </span>
            </Link>

          
            <Link href="/contact">
              <span className="cursor-pointer transition hover:text-[#A85D35]">
                Contact
              </span>
            </Link>
          </div>

          <div className="hidden flex-1 xl:block" />

          <div className="flex flex-shrink-0 items-center gap-4">

            <div className="relative hidden w-[170px] lg:flex xl:w-[200px] 2xl:w-[230px]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full border border-[#EFE6DE] bg-[#F8F4EF] py-3 pl-5 pr-12 text-sm text-[#2F2A26] outline-none transition focus:border-[#B96A3C]"
              />

              <FiSearch
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#5C514A] transition hover:text-[#A85D35]"
              />
            </div>

            <div className="flex flex-shrink-0 items-center gap-2 text-[#3D352F] md:gap-3">

              <Link href="/cart">
                <div className="relative">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] transition hover:bg-[#F0E3D7] hover:text-[#A85D35] md:h-11 md:w-11">
                    <FiShoppingBag size={20} />
                  </button>

                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#A85D35] text-[10px] font-medium text-white">
                    0
                  </span>
                </div>
              </Link>

              <Link href="/wishlist">
                <div className="relative">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] transition hover:bg-[#F0E3D7] hover:text-[#A85D35] md:h-11 md:w-11">
                    <FiHeart size={20} />
                  </button>

                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#A85D35] text-[10px] font-medium text-white">
                    0
                  </span>
                </div>
              </Link>

              <Link href="/login">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EF] transition hover:bg-[#F0E3D7] hover:text-[#A85D35] md:h-11 md:w-11">
                  <FiUser size={20} />
                </button>
              </Link>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;