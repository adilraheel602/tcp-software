import composite02 from "../Images/composite02.png";
import awards from "../Images/awards_grouped.png";
import React from "react";
import ReviewsCarousel from "./ReviewsCarousel";

const Testimonials = () => {
  const industries = [
    {
      icon: "🏫",
      title: "K-12 education",
      description:
        "Increase efficiencies and accuracy, reduce compliance risk, and improve staff and substitute experiences.",
    },
    {
      icon: "🎓",
      title: "Higher education",
      description:
        "Manage student workers, create efficient, standardized processes, and keep labor budgets on track.",
    },
    {
      icon: "⚖️",
      title: "Government and public safety",
      description:
        "State governments and small volunteer agencies improve efficiency and employee experiences while cutting costs and compliance risk.",
    },
    {
      icon: "💙",
      title: "Healthcare",
      description:
        "Drive compliant schedules for just-right patient care, control costs, and improve employee experiences.",
    },
    {
      icon: "🤖",
      title: "Manufacturing",
      description:
        "Optimize your workforce, control labor costs, and improve employee experiences.",
    },
    {
      icon: "🛒",
      title: "Retail",
      description:
        "Create just-right schedules, control costs, and become an employer of choice.",
    },
    {
      icon: "🚜",
      title: "Construction",
      description:
        "Accurately track labor, boost profitability, and drive efficient business processes across remote teams.",
    },
    {
      icon: "🍽️",
      title: "Hospitality",
      description:
        "Drive exceptional service with happier employees and more efficient processes.",
    },
  ];
  const testimonials = [
    {
      author: "ALadtec",
      quote:
        "For public safety professionals, automates 24/7 rotational shift scheduling and agency workflows.",
    },
    {
      author: "Humanity Time",
      quote:
        "Effortless time tracking and scheduling software for small business.",
    },
    {
      author: "ScheduleAnywhere",
      quote:
        "Simple way to create and populate static shifts and at-a-glance visibility into coverage counts.",
    },
    {
      author: "InstaSub",
      quote:
        "K-12 substitute management, automated absence management, and substitute hours tracking.",
    },
  ];

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 md:mb-8">
          Products for your industry
        </h2>
        <h3 className="text-xl">
          We understand each industry has different needs, that’s why we
          <br /> have additional industry specific products.
        </h3>

        <div className="grid grid-cols-1 py-28 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              //className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-black font-bold text-xl md:text-lg mb-4">
                {testimonial.author}
              </p>
              <div className="mt-4">
                <p className="text-gray-800 font-semibold">
                  {testimonial.quote}
                </p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
                <button className="flex items-center gap-2 py-2 text-blue-500 rounded-md hover:gap-3 transition-all duration-300">
                  Learn More <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="relative bg-[#f8fcff] w-full min-h-screen flex flex-col items-center">
          {/* Green Line */}
          <div className="absolute top-0 left-0 w-full h-2 bg-[#8cc63f]" />

          {/* Centering Container */}
          <div className="flex flex-col justify-center items-center flex-1 w-full">
            <div className="bg-white shadow-lg rounded-2xl p-10 w-full md:w-4/5 mx-auto max-w-4xl text-center">
              {/* Heading */}
              <h2 className="text-2xl text-center font-bold py-4 text-gray-900">
                We have solutions for small businesses too
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-center mt-2">
                200 or fewer employees? TCP offers time tracking
                <br /> and scheduling software purpose-built for you.
              </p>

              {/* Button */}
              <div className="mt-6">
                <button className="px-6 py-2 border border-gray-700 text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition group">
                  Learn more{" "}
                  <span className="transition-transform group-hover:translate-x-1 inline-block">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Dark Bottom Section */}
          <div className="w-full h-48 bg-[#101827]" />
        </div>

        <div className="bg-gray-800 text-white">
          <h1 className="ml-16 text-4xl py-8 font-bold">
            Purpose-built for you
          </h1>
          <p className="text-2xl ml-16 font-normal space-y-2">
            Time, attendance, and employee scheduling look different across
            sectors and industries.
            <br /> Not only do we get it, we’re built for it. See how we can
            support your team.
          </p>
          <div>
            <div className="flex bg-blue-100 w-full py-12 px-6">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-300">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 w-full h-full border border-gray-300 flex flex-col items-center text-center"
                  >
                    <div className="text-blue-500 text-4xl mb-4">
                      {industry.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{industry.description}</p>
                    <a
                      href="#"
                      className="text-blue-600 font-semibold mt-4 inline-block"
                    >
                      Learn more →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between bg-gray-100 p-4 md:p-8">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-2xl md:text-4xl text-gray-900 font-bold">
              Time tracking devices for every need
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-900">
              Stay compliant with labor laws and union rules and create time
              integrity by{" "}
              <strong>
                eliminating hidden costs and collection inaccuracies.
              </strong>
            </h2>
            <div className="bg-gray-100 text-sm rounded-md">
              <h3 className="text-gray-500 font-semibold uppercase text-xs mb-2">
                Available Options:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <ul className="space-y-2 text-gray-700">
                  <li>• Core time clock</li>
                  <li>• Badge reader</li>
                  <li>• Biometric</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Web clock</li>
                  <li>• Mobile App Clock</li>
                  <li>• Thermal Sensor</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={composite02}
              alt="Time tracking devices"
              className="w-full h-auto max-w-md mx-auto lg:max-w-xl object-contain"
            />
          </div>
        </div>
        <div>
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-5xl w-full flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Award-winning time tracking software
              </h2>
              <p className="text-gray-600">
                Every award received is a reflection of our core principles,
                that details make the difference and customer outcomes matter
                most.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-5xl font-bold text-blue-600">3x</span>
                <span className="text-gray-600 text-lg">
                  faster scheduling than competition
                </span>
              </div>
            </div>

            {/* Right Content (Single Award Image) */}
            <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
              <img src={awards} alt="Award" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
        <div>
          <ReviewsCarousel />
        </div>
        <div className="flex flex-col justify-center items-center bg-blue-100 py-40">
          <h1 className="text-extrabold text-black text-2xl">
            Ready to learn more?
          </h1>
          <p className="text-extrabold text-gray-700 mt-8 text-base">
            See how TCP Software can manage your employee scheduling and time
            <br />
            tracking in one place — no matter your business’s size or industry.
          </p>
          <button className="border px-12 text-black font-semibold rounded-lg border-black mt-8 py-2">
            Get a demo
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between p-4 md:p-12 gap-6 md:gap-8">
          {/* First Column */}
          <div className="w-full md:w-1/3">
            <h2 className="font-semibold text-xl md:text-2xl mb-2">
              Simple Pricing
            </h2>
            <p className="text-gray-700 text-sm md:text-base py-2">
              No hidden fees. Our simple pricing removes all surprises.
            </p>
          </div>

          {/* Second Column */}
          <div className="w-full md:w-1/3 md:px-6 md:border-l border-gray-400 pt-4 md:pt-0">
            <h2 className="font-semibold text-xl md:text-2xl mb-2">
              Custom Trainings
            </h2>
            <p className="text-gray-700 text-sm md:text-base py-2">
              We train your team to make sure they are experts just like us.
            </p>
          </div>

          {/* Third Column */}
          <div className="w-full md:w-1/3 md:px-6 md:border-l border-gray-400 pt-4 md:pt-0">
            <h2 className="font-semibold text-xl md:text-2xl mb-2">
              37,000+ organizations trust us
            </h2>
            <p className="text-gray-700 text-sm md:text-base py-2">
              We work with customers across dozens of industries like yours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
