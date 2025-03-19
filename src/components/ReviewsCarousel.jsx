import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import quote from "../Images/quote.png";

const reviews = [
  {
    quote:
      "Humanity is really user-friendly, and their support gets back to you quickly. No need to stress. This is the easiest system you'll find compared to others you've used.",
    name: "Reina F.",
    position: "Enrollment Specialist | G2 Review",
  },
  {
    quote:
      "It gives me a real-time way to capture hours worked on each project, and I don't have to remind my crew to turn in time sheets.",
    name: "Leyda M.",
    position: "Office Manager | G2 Review",
  },
  {
    quote:
      "Love their customer support. No waiting periods during phone calls, help from the live person (no robots), immediate help with technical issues.",
    name: "Olga T.",
    position: "G2 Review",
  },
];

const ReviewsCarousel = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Our customers love us...
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }, // Show 2 slides on tablets
          1024: { slidesPerView: 3 }, // Show 3 slides on large screens
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="pb-10"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="p-6 border rounded-lg shadow-md bg-white"
          >
            <div className="mb-4">
              <img
                className="w-8 h-8 object-contain opacity-60"
                src={quote}
                alt="quote symbol"
              />
            </div>
            <p className="text-gray-600 italic mb-4">"{review.quote}"</p>
            <hr className="my-2 border-blue-300 w-12" />
            <p className="text-gray-800 font-semibold">{review.name}</p>
            <p className="text-sm text-gray-500">{review.position}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsCarousel;
