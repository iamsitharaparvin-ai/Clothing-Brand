import { useState } from "react";
import { FiHeart, FiShoppingBag, FiStar } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../App.css";

function ProductCard() {
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: "/image/product6.jpeg",
      name: "Cute Winter Jacket",
      category: "Winter Collection",
      price: "₹1,299",
      oldPrice: "₹1,599",
      reviews: "(25)",
      isNew: true,
    },
    {
      id: 2,
      image: "/image/product3.png",
      name: "Stylish Kids Outfit",
      category: "Girls Collection",
      price: "₹999",
      oldPrice: "₹1,299",
      reviews: "(25)",
      isNew: true,
    },
    {
      id: 3,
      image: "/image/product4.png",
      name: "Casual Boys Wear",
      category: "Boys Collection",
      price: "₹1,199",
      oldPrice: "₹1,499",
      reviews: "(25)",
      isNew: true,
    },
    {
      id: 4,
      image: "/image/product5.png",
      name: "Cute Party Dress",
      category: "Party Wear",
      price: "₹1,499",
      oldPrice: "₹1,899",
      reviews: "(25)",
      isNew: false,
    },
    {
      id: 5,
      image: "/image/babydrs.png",
      name: "Cozy Baby Outfit",
      category: "Baby Collection",
      price: "₹899",
      oldPrice: "₹1,199",
      reviews: "(25)",
      isNew: false,
    },
    {
      id: 6,
      image: "/image/girlbaby.png",
      name: "Premium Kids Fashion",
      category: "New Collection",
      price: "₹1,399",
      oldPrice: "₹1,799",
      reviews: "(25)",
      isNew: false,
    },
  ];

  return (
    <section className="product-section">
      <div className="product-heading">
        <p>TRENDING COLLECTION</p>

        <h2>Popular Products</h2>

        <span>
          Discover our latest and most loved kids fashion collection
        </span>
      </div>

      <div className="product-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={4}
          slidesPerGroup={4}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          className="productSwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div
                className={`reference-product-card ${
                  activeProduct === product.id ? "active-card" : ""
                }`}
                onClick={() => setActiveProduct(product.id)}
              >
                {/* Product Image */}
                <div className="reference-product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  {product.isNew && (
                    <span className="new-arrival-badge">
                      NEW ARRIVAL
                    </span>
                  )}

                  <button
                    className="wishlist-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiHeart />
                  </button>

                  <div className="offer-marquee">
                    <div className="offer-track">
                      <span>✦ Hot Sell 50% Off</span>
                      <span>✦ Hot Sell 50% Off</span>
                      <span>✦ Hot Sell 50% Off</span>
                      <span>✦ Hot Sell 50% Off</span>
                    </div>
                  </div>

                </div>

                <div className="reference-product-details">

                  <p className="product-category">
                    {product.category}
                  </p>

                  <h3>{product.name}</h3>

                  <div className="product-rating">
                    <div className="stars">
                      <FiStar />
                      <FiStar />
                      <FiStar />
                      <FiStar />
                      <FiStar />
                    </div>

                    <span>{product.reviews}</span>
                  </div>

                  <div className="product-price">
                    <span className="old-price">
                      {product.oldPrice}
                    </span>

                    <span className="new-price">
                      {product.price}
                    </span>

                    <span className="discount">
                      -30%
                    </span>
                  </div>

                  {activeProduct === product.id && (
                    <button
                      className="reference-cart-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`${product.name} added to cart`);
                      }}
                    >
                      <FiShoppingBag />
                      Add To Cart
                    </button>
                  )}

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductCard;