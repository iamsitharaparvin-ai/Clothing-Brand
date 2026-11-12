import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiArrowRight,
  FiChevronRight,
  FiShoppingBag,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  const [cart, setCart] = useState([]);

  // ================= LOAD CART =================
  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  // ================= INCREASE QUANTITY =================
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // ================= DECREASE QUANTITY =================
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // ================= REMOVE ITEM =================
  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // ================= SUBTOTAL =================
  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // ================= SHIPPING =================
  const shipping =
    subtotal === 0 || subtotal >= 999 ? 0 : 99;

  // ================= TOTAL =================
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <Navbar />

      {/* =====================================================
          CART HEADER
      ====================================================== */}
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

        {/* Soft Overlay */}
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
              Cart
            </span>

          </div>

          {/* ================= HEADER CONTENT ================= */}
          <div className="mx-auto mt-7 max-w-3xl text-center sm:mt-8">

            {/* Badge */}
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
              Shopping Cart
            </span>

            {/* Heading */}
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
              Your{" "}
              <span className="text-[#A85D35]">
                Cart
              </span>
            </h1>

            {/* Description */}
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
              Review your selected items and get ready
              for your little one's next stylish look.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          CART CONTENT
      ====================================================== */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">

        <div className="mx-auto max-w-7xl">

          {cart.length === 0 ? (

            /* =================================================
                EMPTY CART
            ================================================== */
            <div className="py-12 text-center sm:py-16">

              <div
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f0e3db]
                  text-[#A85D35]
                "
              >
                <FiShoppingBag size={32} />
              </div>

              <h2 className="mt-6 text-2xl font-extrabold text-[#171717] sm:text-3xl">
                Your Cart is Empty
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
                You haven't added any products to your cart
                yet. Explore our collection and find
                something special for your little ones.
              </p>

              <Link href="/products">

                <button
                  className="
                    mt-7
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
                    hover:bg-[#8f4e2e]
                  "
                >
                  Continue Shopping
                  <FiArrowRight size={16} />
                </button>

              </Link>

            </div>

          ) : (

            /* =================================================
                CART CONTENT
            ================================================== */
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">

              {/* =================================================
                  CART ITEMS
              ================================================== */}
              <div className="lg:col-span-2">

                <div
                  className="
                    rounded-3xl
                    border
                    border-[#eee5df]
                    bg-[#FAF8F6]
                    p-5
                    sm:p-7
                    lg:p-8
                  "
                >

                  {/* Cart Heading */}
                  <div className="mb-7 flex items-center justify-between">

                    <div>

                      <p className="text-xs font-bold uppercase tracking-[3px] text-[#A85D35]">
                        Your Selection
                      </p>

                      <h2 className="mt-2 text-2xl font-extrabold text-[#171717]">
                        Cart Items
                      </h2>

                    </div>

                    <span className="rounded-full bg-[#f0e3db] px-4 py-2 text-xs font-semibold text-[#A85D35]">
                      {cart.length} item
                      {cart.length !== 1 ? "s" : ""}
                    </span>

                  </div>

                  {/* Items */}
                  <div className="space-y-6">

                    {cart.map((item) => (

                      <div
                        key={item.id}
                        className="
                          flex
                          flex-col
                          gap-5
                          border-b
                          border-[#eee5df]
                          pb-6
                          last:border-b-0
                          last:pb-0
                          sm:flex-row
                        "
                      >

                        {/* Product Image */}
                        <img
                          src={
                            item.thumbnail ||
                            item.images?.[0]
                          }
                          alt={item.title}
                          className="
                            h-52
                            w-full
                            rounded-2xl
                            bg-white
                            object-cover
                            sm:h-32
                            sm:w-28
                          "
                        />

                        {/* Product Details */}
                        <div className="flex-1">

                          <h3 className="text-lg font-bold text-[#171717]">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            Kids Collection
                          </p>

                          <p className="mt-3 font-semibold text-[#A85D35]">
                            ₹{item.price}
                          </p>

                          {/* Quantity */}
                          <div className="mt-4 flex items-center gap-3">

                            <button
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-gray-200
                                bg-white
                                transition
                                hover:border-[#A85D35]
                                hover:bg-[#f0e3db]
                              "
                            >
                              <FiMinus size={14} />
                            </button>

                            <span className="w-6 text-center font-semibold text-[#171717]">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-gray-200
                                bg-white
                                transition
                                hover:border-[#A85D35]
                                hover:bg-[#f0e3db]
                              "
                            >
                              <FiPlus size={14} />
                            </button>

                          </div>

                        </div>

                        {/* Price + Remove */}
                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            sm:flex-col
                            sm:items-end
                          "
                        >

                          <p className="font-bold text-[#171717]">
                            ₹
                            {(
                              item.price *
                              item.quantity
                            ).toFixed(2)}
                          </p>

                          <button
                            onClick={() =>
                              removeItem(item.id)
                            }
                            className="
                              text-gray-400
                              transition
                              hover:text-red-500
                            "
                            title="Remove item"
                          >
                            <FiTrash2 size={18} />
                          </button>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

              {/* =================================================
                  ORDER SUMMARY
              ================================================== */}
              <div>

                <div
                  className="
                    rounded-3xl
                    border
                    border-[#eee5df]
                    bg-[#FAF8F6]
                    p-6
                    sm:p-8
                    lg:sticky
                    lg:top-24
                  "
                >

                  <p className="text-xs font-bold uppercase tracking-[3px] text-[#A85D35]">
                    Checkout
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold text-[#171717]">
                    Order Summary
                  </h2>

                  <div className="mt-7 space-y-5">

                    {/* Subtotal */}
                    <div className="flex justify-between text-sm text-gray-600">

                      <span>
                        Subtotal
                      </span>

                      <span className="font-medium text-[#171717]">
                        ₹{subtotal.toFixed(2)}
                      </span>

                    </div>

                    {/* Shipping */}
                    <div className="flex justify-between text-sm text-gray-600">

                      <span>
                        Shipping
                      </span>

                      <span className="font-medium text-[#171717]">
                        {shipping === 0
                          ? "FREE"
                          : `₹${shipping}`}
                      </span>

                    </div>

                    {/* Free Shipping */}
                    {subtotal > 0 &&
                      subtotal < 999 && (

                        <div className="rounded-xl bg-[#f0e3db] p-3">

                          <p className="text-xs leading-5 text-[#A85D35]">
                            Add ₹
                            {(999 - subtotal).toFixed(2)}
                            {" "}
                            more to get FREE shipping.
                          </p>

                        </div>

                      )}

                    {/* Total */}
                    <div className="flex items-center justify-between border-t border-[#e5dcd5] pt-5">

                      <span className="text-lg font-bold text-[#171717]">
                        Total
                      </span>

                      <span className="text-2xl font-extrabold text-[#A85D35]">
                        ₹{total.toFixed(2)}
                      </span>

                    </div>

                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={() =>
                      alert(
                        "Checkout page will be created next!"
                      )
                    }
                    className="
                      mt-8
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-[#A85D35]
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-[#8f4e2e]
                    "
                  >
                    Proceed to Checkout
                    <FiArrowRight size={16} />
                  </button>

                  {/* Continue Shopping */}
                  <Link href="/products">

                    <button
                      className="
                        mt-3
                        w-full
                        rounded-full
                        border
                        border-[#A85D35]
                        py-3
                        text-sm
                        font-semibold
                        text-[#A85D35]
                        transition
                        hover:bg-[#f0e3db]
                      "
                    >
                      Continue Shopping
                    </button>

                  </Link>

                </div>

              </div>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />

    </div>
  );
}

export default Cart;
