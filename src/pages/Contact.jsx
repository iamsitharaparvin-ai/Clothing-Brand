import { Link } from "wouter";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiChevronRight,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= CONTACT HEADER ================= */}
      <section
        className="
          relative
          overflow-hidden
          bg-cover
          bg-center
          bg-no-repeat
          px-4
          py-9
          sm:px-6
          sm:py-11
          lg:px-10
          lg:py-12
        "
        style={{
          backgroundImage: "url('/image/bghead.png')",
        }}
      >
        {/* Soft Off-White Overlay */}
        <div className="absolute inset-0 bg-[#FAF7F2]/70"></div>

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* ================= BREADCRUMB ================= */}
          <div className="flex items-center gap-2 text-xs text-gray-500 sm:text-sm">

            <Link
              href="/"
              className="transition hover:text-[#A85D35]"
            >
              Home
            </Link>

            <FiChevronRight size={14} />

            <span className="font-medium text-[#A85D35]">
              Contact Us
            </span>

          </div>

          {/* ================= HEADER CONTENT ================= */}
          <div className="mx-auto mt-7 max-w-3xl text-center sm:mt-8">

            <span
              className="
                inline-flex
                rounded-full
                bg-[#f0e3db]/95
                px-4
                py-1.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#A85D35]
                sm:px-5
                sm:py-2
                sm:text-xs
              "
            >
              Contact Us
            </span>

            <h1
              className="
                mt-3
                text-3xl
                font-extrabold
                tracking-tight
                text-[#171717]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Contact{" "}
              <span className="text-[#A85D35]">
                LILUX
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-3
                max-w-2xl
                text-xs
                leading-6
                text-gray-600
                sm:text-sm
                lg:text-base
              "
            >
              We'd love to hear from you. Whether you have a question
              about our products, your order, or simply want to say
              hello, our team is here to help.
            </p>

          </div>
        </div>
      </section>


      {/* ================= CONTACT INFORMATION ================= */}
      <section
        className="
    bg-white
    px-4
    py-12
    sm:px-6
    sm:py-16
    lg:px-10
    lg:py-20
  "
      >
        <div className="mx-auto max-w-7xl">

          {/* ================= HEADING ================= */}
          <div className="text-center">

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[3px]
                text-[#A85D35]
              "
            >
              Get In Touch
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-extrabold
                text-[#171717]
                sm:text-4xl
              "
            >
              We'd Love To{" "}
              <span className="text-[#A85D35]">
                Hear From You
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-gray-500
                sm:text-base
              "
            >
              Have a question, suggestion, or need help with your order?
              Reach out to our friendly LILUX team.
            </p>

          </div>


          {/* ================= CONTACT CARDS ================= */}
          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {/* Visit Us */}
            <div
              className="
                rounded-2xl
                border
                border-[#eee5df]
                bg-[#FAF8F6]
                p-6
                text-center
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f0e3db]
                  text-[#A85D35]
                "
              >
                <FiMapPin size={22} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#171717]">
                Visit Us
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fashion Street,
                <br />
                Kochi, Kerala
              </p>
            </div>


            {/* Call Us */}
            <div
              className="
                rounded-2xl
                border
                border-[#eee5df]
                bg-[#FAF8F6]
                p-6
                text-center
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f0e3db]
                  text-[#A85D35]
                "
              >
                <FiPhone size={22} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#171717]">
                Call Us
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                +91 98765 43210
              </p>
            </div>


            {/* Email Us */}
            <div
              className="
                rounded-2xl
                border
                border-[#eee5df]
                bg-[#FAF8F6]
                p-6
                text-center
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f0e3db]
                  text-[#A85D35]
                "
              >
                <FiMail size={22} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#171717]">
                Email Us
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                hello@lilux.com
              </p>
            </div>


            {/* Opening Hours */}
            <div
              className="
                rounded-2xl
                border
                border-[#eee5df]
                bg-[#FAF8F6]
                p-6
                text-center
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f0e3db]
                  text-[#A85D35]
                "
              >
                <FiClock size={22} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#171717]">
                Opening Hours
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Mon - Sat
                <br />
                9 AM - 7 PM
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= MESSAGE / FORM SECTION ================= */}
      {/* WHITE BACKGROUND */}
      <section
        className="
          bg-white
          px-4
          py-12
          sm:px-6
          sm:py-16
          lg:px-10
          lg:py-20
        "
      >
        <div className="mx-auto max-w-5xl">

          {/* ================= HEADING ================= */}
          <div className="text-center">

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[3px]
                text-[#A85D35]
              "
            >
              Send A Message
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-extrabold
                text-[#171717]
                sm:text-4xl
              "
            >
              How Can We Help?
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-gray-500
                sm:text-base
              "
            >
              Fill out the form below and our LILUX team will get back
              to you as soon as possible.
            </p>

          </div>


          {/* ================= FORM ================= */}
          <form
            className="
              mt-9
              rounded-3xl
              bg-[#FAF8F6]
              p-5
              shadow-sm
              ring-1
              ring-[#eee5df]
              sm:p-8
              lg:p-10
            "
          >

            {/* Name + Email */}
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                  "
                >
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3.5
                    text-sm
                    outline-none
                    transition
                    focus:border-[#A85D35]
                    focus:ring-1
                    focus:ring-[#A85D35]/20
                  "
                />
              </div>


              <div>
                <label
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                  "
                >
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3.5
                    text-sm
                    outline-none
                    transition
                    focus:border-[#A85D35]
                    focus:ring-1
                    focus:ring-[#A85D35]/20
                  "
                />
              </div>

            </div>


            {/* Phone + Subject */}
            <div className="mt-5 grid gap-5 md:grid-cols-2">

              <div>
                <label
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                  "
                >
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3.5
                    text-sm
                    outline-none
                    transition
                    focus:border-[#A85D35]
                    focus:ring-1
                    focus:ring-[#A85D35]/20
                  "
                />
              </div>


              <div>
                <label
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                  "
                >
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3.5
                    text-sm
                    outline-none
                    transition
                    focus:border-[#A85D35]
                    focus:ring-1
                    focus:ring-[#A85D35]/20
                  "
                />
              </div>

            </div>


            {/* Message */}
            <div className="mt-5">

              <label
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-gray-700
                "
              >
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-4
                  py-3.5
                  text-sm
                  outline-none
                  transition
                  focus:border-[#A85D35]
                  focus:ring-1
                  focus:ring-[#A85D35]/20
                "
              ></textarea>

            </div>


            {/* Send Button */}
            <button
              type="submit"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#A85D35]
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-[#8f4e2e]
              "
            >
              Send Message
              <FiSend size={16} />
            </button>

          </form>

        </div>
      </section>


      {/* ================= EMAIL / SUPPORT SECTION ================= */}
      {/* OFF-WHITE BACKGROUND */}
      <section
        className="
          bg-[#FAF7F2]
          px-4
          py-12
          sm:px-6
          sm:py-16
          lg:px-10
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            rounded-[30px]
            bg-[#A85D35]
            px-6
            py-10
            text-center
            sm:px-10
          "
        >

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[3px]
              text-white/80
            "
          >
            LILUX Support
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-extrabold
              text-white
              sm:text-4xl
            "
          >
            We're Here For You
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-white/80
              sm:text-base
            "
          >
            From choosing the perfect outfit to tracking your order,
            we're always happy to help make your LILUX experience special.
          </p>

          <a
            href="mailto:hello@lilux.com"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-7
              py-3.5
              text-sm
              font-semibold
              text-[#A85D35]
              transition
              hover:bg-[#faf5f1]
            "
          >
            <FiMail size={16} />
            Email Us
          </a>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}

export default Contact;