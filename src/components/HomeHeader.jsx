import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HomeHeader = () => {
  const bgimage = {
    backgroundImage: 'url("/background-image.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };
  const owlOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    lazyLoad: true,
    dots: false,
    nav: true,
    navText: ["< ", ">"],
  };
  return (
    <div
      className="text-white h-full w-full flex flex-col justify-center items-center"
      style={bgimage}
    >
      <OwlCarousel className="mt-44 text-3xl" {...owlOptions}>
        <div className="flex justify-center items-center">
          <h1 className="font-aldrich text-4xl md:text-6xl w-4/5 md:w-3/4 text-center">
            QUALITY IS NOT ONLY OUR STANDARD
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="font-aldrich text-4xl md:text-6xl w-4/5 md:w-3/4 text-center">
            QUALITY IS NOT ONLY OUR STANDARD
          </h1>
        </div>
      </OwlCarousel>
      <div>
      <button className="text-semibold text-xl mt-16 border-custom-gray border-2 p-2">See Projects</button>
      </div>
      <div className="mt-32 flex flex-col md:flex-row justify-center items-center md:justify-between gap-28">
      <span className="text-white cursor-default">______________</span>
      <span className="text-custom-gray">Discover more</span>
      <div className="my-2 text-xl">
      <FontAwesomeIcon className="mx-6 cursor-pointer" icon={faFacebookF} />
      <FontAwesomeIcon className="mx-6 cursor-pointer" icon={faTwitter} />
      <FontAwesomeIcon className="mx-6 cursor-pointer" icon={faInstagram} />
      <FontAwesomeIcon className="mx-6 cursor-pointer" icon={faLinkedinIn} />
      </div>
      </div>
    </div>
  );
};

export default HomeHeader; 
