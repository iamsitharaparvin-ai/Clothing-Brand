import { Link } from "wouter";
import {
  FiClock,
  FiUser,
  FiArrowRight,
} from "react-icons/fi";

function Blog() {
  const blogs = [
    {
      id: 1,
      image: "/image/blogimg.png",
      category: "Fashion",
      date: "September 05, 2026",
      title: "Cute Kids Fashion Trends You Will Love This Season",
      readTime: "5 Min To Read",
      author: "LILUX Team",
      description:
        "Discover beautiful colors, playful patterns, and comfortable styles that make kids look stylish while keeping them comfortable.",
    },
    {
      id: 2,
      image: "/image/blogg2.png",
      category: "Lifestyle",
      date: "September 03, 2026",
      title: "How to Choose Comfortable Clothes for Your Kids",
      readTime: "6 Min To Read",
      author: "LILUX Team",
      description:
        "Learn simple tips for choosing soft, breathable, and comfortable clothing that allows children to move freely.",
    },
    {
      id: 3,
      image: "/image/blog3.png",
      category: "Style Guide",
      date: "August 28, 2026",
      title: "Perfect Party Outfit Ideas for Little Stars",
      readTime: "4 Min To Read",
      author: "LILUX Team",
      description:
        "Explore cute party outfit ideas with stylish dresses, comfortable shoes, and beautiful accessories for little stars.",
    },
    {
      id: 4,
      image: "/image/schlimg.png",
      category: "Kids Wear",
      date: "August 22, 2026",
      title: "Back To School Fashion Ideas for Kids",
      readTime: "7 Min To Read",
      author: "LILUX Team",
      description:
        "Refresh your child's wardrobe with practical, comfortable, and stylish outfits perfect for everyday school life.",
    },
  ];

  return (
    <div className="w-full bg-white">

      {/* ================= SMALL BLOG HEADER ================= */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
        style={{
          backgroundImage: "url('/image/bghead.png')",
        }}
      >
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          {/* Label */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="hidden h-px w-8 bg-[#A85D35]/40 sm:block"></span>

            <span className="rounded-full bg-[#f2e4d8]/95 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#A85D35] sm:text-sm">
              Our Blog
            </span>

            <span className="hidden h-px w-8 bg-[#A85D35]/40 sm:block"></span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl font-bold leading-tight text-[#182234] sm:text-4xl lg:text-5xl">
            Our Latest Blogs
          </h1>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Discover the latest kids fashion trends, styling tips,
            comfortable clothing ideas, and inspiration from LILUX.
          </p>

        </div>
      </section>

      {/* ================= BLOG CARDS ================= */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-5"
              >

                {/* Image */}
                <div className="h-[190px] overflow-hidden rounded-xl bg-[#f8f3ee] sm:h-[205px]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Category + Date */}
                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#f6ebe2] px-3 py-1 text-[10px] font-bold uppercase text-[#A85D35] sm:text-xs">
                    {blog.category}
                  </span>

                  <span className="text-[10px] text-gray-400 sm:text-xs">
                    {blog.date}
                  </span>
                </div>

                {/* Title */}
                <h2 className="mt-4 line-clamp-2 font-serif text-xl font-bold leading-7 text-[#182234] transition group-hover:text-[#A85D35]">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                  {blog.description}
                </p>

                {/* Meta */}
                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4 text-xs text-gray-400">

                  <span className="flex items-center gap-1.5">
                    <FiClock
                      size={14}
                      className="text-[#A85D35]"
                    />
                    {blog.readTime}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FiUser
                      size={14}
                      className="text-[#A85D35]"
                    />
                    {blog.author}
                  </span>

                </div>

                {/* Read More */}
                <div className="mt-auto pt-5">
                  <Link
                    href={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#A85D35] transition-all hover:gap-3"
                  >
                    Read More
                    <FiArrowRight size={16} />
                  </Link>
                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}

export default Blog;