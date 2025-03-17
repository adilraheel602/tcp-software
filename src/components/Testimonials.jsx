import composite from "../Images/composite.png";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "TCP Software helped us streamline our workforce like never before!",
      author: "John Doe",
      position: "HR Manager",
      company: "Tech Corp",
    },
    {
      quote: "The scheduling features have saved us countless hours of work.",
      author: "Jane Smith",
      position: "Operations Director",
      company: "Global Industries",
    },
    {
      quote: "Outstanding support team and innovative solutions for our needs.",
      author: "Mike Johnson",
      position: "CEO",
      company: "StartUp Inc",
    },
  ];

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-8 md:mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-600 text-base md:text-lg italic mb-4">
                "{testimonial.quote}"
              </p>
              <div className="mt-4">
                <p className="text-gray-800 font-semibold">
                  {testimonial.author}
                </p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
