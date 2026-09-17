import { Link, useRoute } from "wouter";
import {
  FiArrowLeft,
  FiClock,
  FiUser,
  FiChevronRight,
} from "react-icons/fi";

function BlogDetails() {
  const [, params] = useRoute("/blog/:id");

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
      content: [
        "Kids fashion is all about combining style, comfort, and freedom of movement. Today's trends bring together playful colors, beautiful patterns, and practical designs that children can enjoy every day.",
        "Soft fabrics and comfortable fits are especially important for children. Clothes should allow kids to move, play, and explore without feeling restricted.",
        "This season, simple colors, cute prints, relaxed outfits, and stylish layers are becoming popular choices for little ones.",
      ],
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
      content: [
        "Choosing comfortable clothes for children starts with selecting soft and breathable fabrics. Kids spend a lot of time playing and moving, so comfort should always be a priority.",
        "Look for clothing with a relaxed fit and avoid materials that may feel rough or uncomfortable against the skin.",
        "It is also helpful to choose practical designs that are easy for children to wear, remove, and manage during their daily activities.",
      ],
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
      content: [
        "A party is a perfect opportunity to dress little ones in something special while keeping them comfortable throughout the event.",
        "Beautiful dresses, smart outfits, stylish shoes, and simple accessories can create a lovely party look without making the outfit uncomfortable.",
        "When choosing a party outfit, consider the child's comfort, the event, and the weather so they can enjoy the celebration freely.",
      ],
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
      content: [
        "Back-to-school clothing should be comfortable, practical, and easy to wear. Children need outfits that can keep up with their busy school days.",
        "Simple tops, comfortable bottoms, lightweight layers, and durable footwear can create an easy everyday school wardrobe.",
        "Choosing versatile pieces also makes it easier to create different outfits while keeping the wardrobe organized and practical.",
      ],
    },
  ];

  const blogId = Number(params?.id);
  const blog = blogs.find((item) => item.id === blogId);

    if (!blog) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Blog Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            Sorry, the blog article you are looking for does not exist.
          </p>

          <Link
            href="/blog"
            className="mt-6 rounded-xl bg-[#A85D35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8f4e2d]"
          >
            Back To Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADER ================= */}
      <section className="bg-[#faf8f6] px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">

          {/* BREADCRUMB */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link
              href="/"
              className="transition hover:text-[#A85D35]"
            >
              Home
            </Link>

            <FiChevronRight size={15} />

            <Link
              href="/blog"
              className="transition hover:text-[#A85D35]"
            >
              Blog
            </Link>

            <FiChevronRight size={15} />

            <span className="text-[#A85D35]">
              Blog Details
            </span>
          </div>


          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A85D35] transition hover:gap-3"
          >
            <FiArrowLeft size={16} />
            Back to Blog
          </Link>

        </div>
      </section>


     <section className="bg-[#faf8f6] px-4 pb-14 sm:px-6 lg:px-10 lg:pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

        
          <div>
            <span className="inline-block rounded-full bg-[#A85D35]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#A85D35]">
              {blog.category}
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {blog.title}
            </h1>

            {/* META */}
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-gray-500">

              <span className="flex items-center gap-2">
                <FiClock size={16} />
                {blog.readTime}
              </span>

              <span className="flex items-center gap-2">
                <FiUser size={16} />
                {blog.author}
              </span>

              <span>
                {blog.date}
              </span>

            </div>
          </div>


          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] overflow-hidden rounded-3xl bg-white p-5 shadow-sm">

              <img
                src="/image/blogtitle.png"
                alt={blog.title}
                className="h-[280px] w-full object-contain sm:h-[340px]"
              />

            </div>
          </div>

        </div>
      </section>


      <main className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <article className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10 lg:p-14">

          {/* INTRO */}
          <p className="text-lg leading-8 text-gray-600">
            {blog.description}
          </p>

          {/* CONTENT */}
          <div className="mt-8 space-y-6">
            {blog.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-8 text-gray-600 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

         

          <div className="mt-10 border-t border-gray-100 pt-8">

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl border border-[#A85D35] px-5 py-3 text-sm font-semibold text-[#A85D35] transition hover:bg-[#A85D35] hover:text-white"
            >
              <FiArrowLeft size={16} />
              Back to Blog
            </Link>

          </div>

        </article>
      </main>

    </div>
  );
}

export default BlogDetails;

