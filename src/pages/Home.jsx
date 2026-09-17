import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import PopularCategory from "../component/PopularCategory";
import ProductCard from "../component/ProductCard";
import Offer from "../component/Offer";
import MovingText from "../component/Movingtext";
import YoutubeShorts from "../component/YoutubeShorts";
import Blog from "../component/Blog";
import Features from "../component/features";
import AboutSection from "../component/AboutSection";
import StoreInfo from "../component/StoreInfo";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularCategory />
      <ProductCard />
      <Offer />
      <MovingText />
      <YoutubeShorts />
     <Blog />
      <Features/>
     <AboutSection/>
     <StoreInfo/>
     <Footer/>
    </>
  );
}

export default Home;