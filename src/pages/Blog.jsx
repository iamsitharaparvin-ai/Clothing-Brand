import Navbar from "../component/Navbar";
import BlogSection from "../component/Blog";
import Footer from "../component/Footer";

function Blog() {

  return (
    
    <div className="min-h-screen bg-white">
      <Navbar />

      <BlogSection />

      <Footer />
    </div>
  );
}

export default Blog;