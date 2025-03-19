import React from "react";
import quote from "../Images/quote.png";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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

const options = {
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 3000, // Auto-swipe every 3 seconds
  autoplayHoverPause: true,
  smartSpeed: 1000,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
};

const ReviewsCarousel = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Our customers love us...
      </h2>
      <OwlCarousel {...options} className="owl-theme">
        {reviews.map((review, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md">
            <div className="quote-icon-container mb-4">
              <img
                className="quote-icon w-8 h-8 object-contain opacity-60"
                src={quote}
                alt="quotesymbol"
              />
            </div>
            <p className="text-gray-600 italic mb-4">"{review.quote}"</p>
            <hr className="my-2 border-blue-300 w-12" />
            <p className="text-gray-800 font-semibold">{review.name}</p>
            <p className="text-sm text-gray-500">{review.position}</p>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default ReviewsCarousel;
