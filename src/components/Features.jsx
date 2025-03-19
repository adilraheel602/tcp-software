import amazon from "../Images/amazon.png";
import georgia from "../Images/georgia.png";
import wonderful from "../Images/wonderful.png";
import texas from "../Images/texas.png";
import cbs from "../Images/cbs.png";
import marriott from "../Images/marriott.png";
import kaiser from "../Images/kaiser.png";
import laquinta from "../Images/laquinta.png";
import google from "../Images/google.png";
import hampton from "../Images/hampton.png";
import composite from "../Images/composite.png";
import composite01 from "../Images/composite01.png";

const Features = () => {
  return (
    <section className="w-screen bg-white px-4 md:px-8 py-8 md:py-12">
      {/* Trust section */}
      <h2 className="text-xl text-black text-center md:text-left md:px-8 lg:px-32">
        18,000+ customers trust us
      </h2>

      {/* Logo grid - improved responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4 md:gap-6 px-4 md:px-8 lg:px-32 py-4">
        {[
          georgia,
          wonderful,
          texas,
          cbs,
          marriott,
          kaiser,
          laquinta,
          amazon,
          hampton,
          google,
        ].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Company logo"
            className="w-24 h-auto object-contain hover:opacity-80 transition-opacity"
          />
        ))}
      </div>

      {/* Features content */}
      <div className="flex flex-col lg:flex-row justify-between mt-8 gap-8">
        {/* Left column */}
        <div className="px-4 md:px-8 lg:px-32 py-2 space-y-6 lg:w-3/5">
          <h3 className="text-3xl font-bold text-white mb-6">Key Features</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Elevate your employee
            <br className="hidden md:block" /> scheduling & time tracking
          </h2>
          <p className="text-lg md:text-2xl py-4 text-gray-700">
            Automate time and attendance no matter how tricky your payroll or
            compliance rules, and eliminate hidden costs, inaccuracies, and
            inefficiencies.
          </p>
          <p className="py-8 md:py-20 font-bold text-lg md:text-xl">
            Not sure where to start?{" "}
            <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
              Help me choose
            </span>
          </p>
        </div>

        {/* Right column - Stats */}
        <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-8 py-8 lg:w-2/5">
          <div className="text-center lg:text-left p-4 md:p-10">
            <span className="block text-green-400 text-4xl md:text-6xl font-bold">
              97%
            </span>
            <span className="text-gray-700">Customer satisfaction score</span>
          </div>
          <div className="text-center lg:text-left p-4 md:p-10">
            <span className="block text-green-400 text-4xl md:text-6xl font-bold">
              4M+
            </span>
            <span className="text-gray-700">Daily users</span>
          </div>
        </div>
      </div>

      {/* Schedule section */}
      <div className="w-full min-h-screen bg-[#EEFEFD]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row py-12 px-4 md:px-8 gap-8">
            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <img
                className="w-full h-auto object-contain max-w-2xl"
                src={composite}
                alt="Schedule"
              />
            </div>
            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 p-4 md:p-8 lg:p-12">
              <h1 className="text-xl font-semibold">Humanity Schedule</h1>
              <h2 className="text-2xl md:text-4xl font-bold mt-2">
                Dynamic employee scheduling
              </h2>
              <p className="text-lg md:text-xl py-4 md:py-6">
                Eliminate staffing errors, optimize labor costs, and create a
                stress-free experience for managers and employees with Humanity
                Schedule.
              </p>
              <ol className="space-y-3 md:space-y-4">
                <li>✅ Reduce scheduling friction and improve staff clarity</li>
                <li>
                  ✅ Confidently predict coverage demand with AI forecasting
                </li>
                <li>✅ Turn disorganized data into clear insights</li>
                <li>✅ Reduce compliance risk and scheduling conflicts</li>
              </ol>

              <div className="mt-8 md:mt-16 text-base md:text-lg">
                <p className="italic border-l-2 border-blue-400 pl-4 md:pl-6 text-gray-700">
                  “I now spend zero time on scheduling. Even better, the amount
                  of time that I have to spend outside of work troubleshooting
                  scheduling issues has also been reduced to nothing.”
                </p>
                <div className="mt-4 ml-4 md:ml-6">
                  <p className="text-xs md:text-sm font-semibold text-gray-900">
                    Sean Davis
                  </p>
                  <p className="text-xs md:text-sm text-gray-700">
                    Director of Public Safety Education
                  </p>
                  <p className="text-xs md:text-sm text-gray-700">
                    Auburn Career Center
                  </p>
                </div>
              </div>

              <button className="mt-6 md:mt-8 w-full md:w-auto bg-blue-500 text-white hover:bg-blue-900 px-6 py-3 rounded-lg">
                Learn about Humanity Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* next page section */}
      <div className="w-full min-h-screen bg-[#EEFEFD]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row px-4 md:px-8 gap-8">
            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 p-4 md:p-8 lg:p-12">
              <h1 className="text-2xl font-semibold">TimeClock Plus</h1>
              <h2 className="text-2xl md:text-4xl font-bold mt-2">
                Automatic employee time tracking
              </h2>
              <p className="text-lg md:text-xl py-4 md:py-6">
                Automated time and attendance with accurate calculations,
                eliminate hidden costs, inaccuracies, and inefficiencies.
              </p>
              <ol className="space-y-3 md:space-y-4">
                <li>
                  ✅ View detailed information about absences and missing
                  punches during a specified date range
                </li>
                <li>
                  ✅ TimeClock Plus handles complex, rule-based payroll
                  calculations, leave and accrual management, and payroll prep
                </li>
              </ol>

              <div className="mt-8 md:mt-16 text-base md:text-lg">
                <p className="italic border-l-2 border-blue-400 pl-4 md:pl-6 text-gray-700">
                  “TCP helped the Jasper County Board of Education reduce their
                  entire payroll process from four days to two hours.”
                </p>
                <div className="mt-4 ml-4 md:ml-6">
                  <p className="text-xs md:text-sm font-semibold text-gray-900">
                    Gary Jenkins
                  </p>
                  <p className="text-xs md:text-sm text-gray-700">
                    Payroll & Personnel Officer
                  </p>
                  <p className="text-xs md:text-sm text-gray-700">
                    Jasper County Board of Education
                  </p>
                </div>
              </div>

              <button className="mt-6 md:mt-8 w-full md:w-auto bg-blue-500 text-white hover:bg-blue-900 px-6 py-3 rounded-lg">
                Learn about TimeClock Plus
              </button>
            </div>
            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <img
                className="w-full h-auto object-contain max-w-2xl"
                src={composite01}
                alt="Schedule"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
