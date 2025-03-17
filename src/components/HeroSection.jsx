import screen from "../Images/bg_screen.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen overflow-hidden">
      {/* Text Content Section */}
      <section className="w-full lg:w-1/2 py-8 sm:py-12 lg:py-24 px-6 sm:px-12 lg:px-24 text-white z-10">
        <p className="text-gray-400 text-xs sm:text-sm tracking-wider">
          EMPLOYEE SCHEDULING AND TIME TRACKING
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mt-4 leading-tight">
          Get time right,
          <br className="hidden lg:block" /> every time
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
          Automate processes, improve accuracy, manage
          <br className="hidden lg:block" /> costs, and enhance employee
          experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg transition-colors text-base sm:text-lg">
            Get a Demo
          </button>
          <button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg shadow-lg transition-colors text-base sm:text-lg border border-gray-700">
            Watch Video
          </button>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full lg:w-1/2 relative">
        <div className="w-full h-full lg:absolute lg:right-[-20%] xl:right-[-10%] 2xl:right-0 top-0">
          <img
            src={screen}
            alt="Screen Preview"
            className="w-full h-auto object-contain max-w-none lg:max-w-[120%]"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
