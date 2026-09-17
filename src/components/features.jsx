import {
  FiTruck,
  FiHeadphones,
  FiPackage,
  FiGift,
} from "react-icons/fi";

function Features() {
  const features = [
    {
      id: 1,
      icon: <FiTruck />,
      title: "Free Shipping",
      description: "On all orders above ₹999",
    },
    {
      id: 2,
      icon: <FiHeadphones />,
      title: "Quality Support",
      description: "24/7 online feedback",
    },
    {
      id: 3,
      icon: <FiPackage />,
      title: "Easy Returns",
      description: "Return money within 30 days",
    },
    {
      id: 4,
      icon: <FiGift />,
      title: "Special Offers",
      description: "Exciting deals for your little ones",
    },
  ];

  return (
    <section className="w-full bg-[#f7f7f8] py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10">
      
      <div className="max-w-7xl mx-auto">
        
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-10 
          sm:gap-12 
          lg:gap-8
        ">
          
          {features.map((feature) => (
            <div
              key={feature.id}
              className="
                flex 
                flex-col 
                items-center 
                text-center 
                px-3 
                py-4
              "
            >
              {/* Icon */}
              <div className="
                mb-4 
                sm:mb-5 
                text-[#315b9b]
              ">
                <div className="text-[42px] sm:text-[46px] md:text-[50px]">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="
                text-[20px] 
                sm:text-[21px] 
                md:text-[22px]
                font-semibold 
                text-[#242424] 
                mb-2
              ">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="
                text-[15px] 
                sm:text-[16px] 
                md:text-[17px]
                text-gray-500 
                leading-relaxed
              ">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;