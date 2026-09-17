import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularCategory from "../components/PopularCategory";
import ProductCard from "../components/ProductCard";
import Offer from "../components/Offer";
import MovingText from "../components/MovingText";
import YoutubeShorts from "../components/YoutubeShorts";
import Blog from "../components/Blog";
import Features from "../components/features";
import AboutSection from "../components/AboutSection";
import StoreInfo from "../components/StoreInfo";
import Footer from "../components/Footer";

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