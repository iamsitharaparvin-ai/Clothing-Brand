function PopularCategory() {
  const categories = [
    { name: "Baby Girls", image: "/image/Babygirl.png" },
    { name: "Baby Boys", image: "/image/Babyboy.png" },
    { name: "Girls", image: "/image/girls.png" },
    { name: "Boys", image: "/image/boys.png" },
  ];

  return (
    <section className="bg-[#FAF7F2] px-5 py-12 sm:py-16">

      {/* ================= TITLE ================= */}
      <h2 className="mb-10 text-center font-serif text-4xl text-gray-900 sm:text-5xl">
        Popular by Categories
      </h2>


      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">

        {categories.map((category, index) => (
          <div
            key={index}
            className="text-center"
          >

            <div className="mx-auto h-40 w-40 overflow-hidden rounded-full bg-white sm:h-48 sm:w-48 md:h-52 md:w-52">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-800 sm:text-xl">
              {category.name}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}

export default PopularCategory;