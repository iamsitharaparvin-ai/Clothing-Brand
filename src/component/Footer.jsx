import {
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiTwitter,
  FiSend,
  FiArrowUp,
  FiChevronRight,
} from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const helpLinks = [
    "Account Info",
    "Your Orders",
    "Returns & Exchange",
    "Shipping Information",
    "Refund Policy",
  ];

  const shopLinks = [
    "New Arrivals",
    "Girls Collection",
    "Boys Collection",
    "Baby Collection",
    "Party Wear",
    "Accessories",
  ];

  const aboutLinks = [
    "About LILUX",
    "Our Story",
    "Customer Reviews",
    "Contact Us",
    "Careers",
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[#E9DED4] bg-white text-[#2F2A26]">

      {/* Top Brand Line */}
      <div className="h-[3px] w-full bg-[#A85D35]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">

          {/* Brand */}
          <div className="lg:pr-8">

            {/* Logo */}
            <h2 className="font-heading mb-6 text-[32px] md:text-[38px] font-medium tracking-[6px] text-[#A85D35]">
              LILUX
            </h2>

            <div className="mb-6 h-[2px] w-12 bg-[#A85D35]" />

            {/* Description */}
            <p className="max-w-[340px] text-sm leading-7 text-[#5C514A] sm:text-[15px]">
              Discover adorable styles designed for little moments,
              big smiles and beautiful everyday adventures.
            </p>

            {/* Social Icons */}
            <div className="mt-8">

              <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#5C514A]">
                Follow Us
              </p>

              <div className="flex flex-wrap gap-3">

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E9DED4] text-[#5C514A] transition-all duration-300 hover:-translate-y-1 hover:border-[#A85D35] hover:bg-[#A85D35] hover:text-white"
                >
                  <FiInstagram size={17} />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E9DED4] text-[#5C514A] transition-all duration-300 hover:-translate-y-1 hover:border-[#A85D35] hover:bg-[#A85D35] hover:text-white"
                >
                  <FiFacebook size={17} />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E9DED4] text-[#5C514A] transition-all duration-300 hover:-translate-y-1 hover:border-[#A85D35] hover:bg-[#A85D35] hover:text-white"
                >
                  <FiYoutube size={17} />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E9DED4] text-[#5C514A] transition-all duration-300 hover:-translate-y-1 hover:border-[#A85D35] hover:bg-[#A85D35] hover:text-white"
                >
                  <FiTwitter size={17} />
                </a>

                <a
                  href="#"
                  aria-label="Telegram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E9DED4] text-[#5C514A] transition-all duration-300 hover:-translate-y-1 hover:border-[#A85D35] hover:bg-[#A85D35] hover:text-white"
                >
                  <FiSend size={17} />
                </a>

              </div>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="mb-6 font-heading text-lg font-semibold text-[#2F2A26] sm:text-xl">
              Customer Care
            </h3>

            <ul className="space-y-3.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group flex items-center gap-1.5 text-sm text-[#5C514A] transition-all duration-300 hover:text-[#A85D35]"
                  >
                    <FiChevronRight
                      size={14}
                      className="text-[#A85D35] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />

                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-6 font-heading text-lg font-semibold text-[#2F2A26] sm:text-xl">
              Shop Collection
            </h3>

            <ul className="space-y-3.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group flex items-center gap-1.5 text-sm text-[#5C514A] transition-all duration-300 hover:text-[#A85D35]"
                  >
                    <FiChevronRight
                      size={14}
                      className="text-[#A85D35] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />

                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-6 font-heading text-lg font-semibold text-[#2F2A26] sm:text-xl">
              Get To Know Us
            </h3>

            <ul className="space-y-3.5">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group flex items-center gap-1.5 text-sm text-[#5C514A] transition-all duration-300 hover:text-[#A85D35]"
                  >
                    <FiChevronRight
                      size={14}
                      className="text-[#A85D35] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />

                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#E9DED4] py-5 sm:py-6">

          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

            {/* Copyright */}
            <p className="text-xs text-[#5C514A] sm:text-sm">
              © 2026{" "}
              <span className="font-semibold text-[#A85D35]">
                LILUX
              </span>
              . All rights reserved.
            </p>

            {/* Policies */}
            <div className="flex flex-wrap justify-center gap-5 text-xs text-[#5C514A] sm:text-sm">

              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#A85D35]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#A85D35]"
              >
                Terms & Conditions
              </a>

              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#A85D35]"
              >
                Refund Policy
              </a>

            </div>

            {/* Scroll Top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A85D35] text-[#A85D35] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A85D35] hover:text-white"
            >
              <FiArrowUp size={17} />
            </button>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;