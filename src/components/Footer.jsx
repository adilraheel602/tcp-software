import logo from "../Images/logo.png";
import fb from "../Images/fb.png";
import insta from "../Images/insta.png";
import yt from "../Images/yt.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800">
      {/* Top section */}
      <div className="flex flex-col md:flex-row px-4 md:px-20 py-6 justify-between items-center bg-gray-800 text-sm font-medium text-white">
        <img className="w-16 h-16 mb-4 md:mb-0" src={logo} alt="" />
        <div className="flex flex-row items-center mb-4 md:mb-0">
          <p>Stay connected:</p>
          <img className="ml-4 w-6 h-6" src={fb} alt="" />
          <img className="ml-4 w-6 h-6" src={insta} alt="" />
          <img className="ml-4 w-6 h-6" src={yt} alt="" />
        </div>
        <p className="text-center">Get the time right, everytime</p>
      </div>

      {/* Menu sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-4 md:p-20 border-t-2 text-white">
        <fieldset>
          <h1 className="font-bold py-4">PRODUCTS</h1>
          <ul className="space-y-2">
            <li>TimeClock Plus</li>
            <li>Humanity Schedule</li>
            <li>Humanity time</li>
            <li>Aladtec</li>
            <li>ScheduleAnywhere</li>
            <li>InstaSub</li>
            <li>TIme Clocks</li>
            <li>Integrations</li>
          </ul>
        </fieldset>

        <fieldset>
          <h1 className="font-bold py-4">SOLUTIONS</h1>
          <ul className="space-y-2">
            <li>Small Business</li>
            <li>K-12 Education</li>
            <li>Higher Education</li>
            <li>Government and public safety</li>
            <li>Hospitality</li>
            <li>Retail</li>
            <li>Healthcare</li>
            <li>Manufacturing</li>
            <li>Construction</li>
          </ul>
        </fieldset>

        <fieldset>
          <h1 className="font-bold py-4">RESOURCES</h1>
          <ul className="space-y-2">
            <li>Resource Library</li>
            <li>Customer stories</li>
            <li>Blog</li>
            <li>Webinars</li>
          </ul>
        </fieldset>

        <fieldset>
          <h1 className="font-bold py-4">COMPANY</h1>
          <ul className="space-y-2">
            <li>About</li>
            <li>Meet the team</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Contact Us</li>
            <li>Support</li>
          </ul>
        </fieldset>
      </div>

      {/* Copyright section */}
      <p className="flex flex-row justify-between p-4 md:p-12 mt-8 bg-white text-black text-center">
        &copy; 2025 Timeclock Plus, LLC(TCP Software). All rights reserved.
        <span className="ml-16"> Legalese | Security | Privacy Policy</span>
      </p>
    </footer>
  );
};

export default Footer;
