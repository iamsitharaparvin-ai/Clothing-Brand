import { FiChevronRight } from "react-icons/fi";

function StoreInfo() {
  const stores = [
    {
      name: "LILUX Main Store",
      address: "Fashion Street, Kochi, Kerala",
    },
    {
      name: "LILUX Kids Store",
      address: "MG Road, Bengaluru, Karnataka",
    },
    {
      name: "LILUX Little Stars",
      address: "City Centre, Chennai, Tamil Nadu",
    },
    {
      name: "LILUX Fashion Hub",
      address: "Marine Drive, Mumbai, Maharashtra",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f7f7f8]">

      <div className="border-y border-gray-200 bg-white px-4 py-10 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-4"
            >
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <h3 className="text-lg font-medium text-[#242424] sm:text-xl">
                    {store.name}
                  </h3>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#a85d35] text-white">
                    <FiChevronRight size={18} />
                  </span>
                </div>

                <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
                  {store.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="w-full overflow-hidden bg-[#a85d35] py-3">
        
        <div className="flex w-max animate-[marquee_18s_linear_infinite] whitespace-nowrap">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-10 text-base font-bold text-white sm:text-lg"
            >
              <span className="inline-block h-5 w-5 shrink-0 rounded-full border-2 border-white" />

              <span>LILUX - 10% OFF ON YOUR FIRST ORDER</span>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  );
}

export default StoreInfo;