import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex flex-col py-8 px-2 md:px-32 bg-custom-black text-custom-white">
      <div className="my-6 flex flex-col md:flex-row justify-between items-center">
        <h1 className="font-aldrich text-2xl md:text-4xl">
          READY TO WORK WITH US?
        </h1>
        <div className="mt-4 md:mt-0">
          <input
            type="text"
            className="p-4 min-w-64 outline-none text-custom-black"
            placeholder="Enter your Email..."
          />
          <button className="bg-custom-orange p-4">
            <FontAwesomeIcon className="text-xl" icon={faPaperPlane} />
          </button>
        </div>
      </div>
      <hr className="my-8 text-custom-gray" />

      <div className="flex justify-between flex-col md:flex-row my-6">
        <div>
          <img src="/logo.webp" alt="image" />
          <div className="my-6 text-custom-gray">
            <p>7176 Blue Spring Lane</p>
            <p>Santa Monica, CA 90403</p>
          </div>
          <div className="my-6 text-custom-gray">
            <p>InfoSite@gmail.com</p>
            <p>+01 234 456 789</p>
            <div className="my-6">
              <FontAwesomeIcon
                className="mx-4 cursor-pointer"
                icon={faFacebookF}
              />
              <FontAwesomeIcon
                className="mx-4 cursor-pointer"
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className="mx-4 cursor-pointer"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="mx-4 cursor-pointer"
                icon={faLinkedinIn}
              />
            </div>
          </div>
        </div>
        <div className="mt-0 md:mt-4">
          <h1 className="text-xl">Company</h1>
          <div className="text-custom-gray">
            <p className="my-2">About Us</p>
            <p className="my-2">Services</p>
            <p className="my-2">Our Works</p>
            <p className="my-2">Careers</p>
            <p className="my-2">FAQs</p>
          </div>
        </div>

        <div className="mt-0 md:mt-4">
          <h1 className="text-xl">Services</h1>
          <div className="text-custom-gray">
            <p className="my-2">Architecture</p>
            <p className="my-2">Interior Design</p>
            <p className="my-2">Exterior Design</p>
            <p className="my-2">Plannings</p>
            <p className="my-2">FAQs</p>
          </div>
        </div>

        <div className="mt-0 md:mt-4">
          <h1 className="text-xl">Get in Touch</h1>
          <div className="my-6 text-custom-gray">
            <p>7176 Blue Spring Lane</p>
            <p>Santa Monica, CA 90403</p>
          </div>
          <div className="my-6 text-custom-gray">
            <p>InfoSite@gmail.com</p>
            <p>+01 234 456 789</p>
          </div>
        </div>
      </div>
      <hr className="text-custom-gray my-6" />

      <div className="flex flex-col md:flex-row text-center justify-between text-custom-gray">
        <span>
          Copyright © 2024 All rights reserved | This template is made with{" "}
          <FontAwesomeIcon className="text-custom-orange" icon={faHeart} /> by <span className="text-custom-white font-semibold">Colorlib</span> 
        </span>
        <span className="mt-2 md:mt-0">
        Terms of use | Privacy Policy
        </span>
      </div>
    </div>
  );
};

export default Footer;
