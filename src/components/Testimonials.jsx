import "slick-carousel/slick/slick.css";
import { useRef } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const CustomPrevArrow = ({ onClick }) => (
    <button className="slick-arrow slick-prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="slick-arrow slick-next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    asNavFor: slider2.current,
    responsive: [
      {
        breakpoint: 768, // adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    accessibility: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
    asNavFor: slider1.current,

    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings3 = {
    dots: false,
    accessibility: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="my-16 bg-custom-grayish flex flex-col justify-center items-center">
      <span className="text-custom-orange text-lg font-semibold">
        TESTIMONIALS
      </span>
      <h3 className="font-aldrich text-custom-black text-4xl ">
        WHAT YOUR CLIENTS SAY
      </h3>
      <div className="bg-custom-white w-full md:w-3/4 px-8 md:px-16 py-32 my-12 mx-0 md:mx-12">
        <Slider {...settings} ref={slider1}>
          <div>
            <p className="text-2xl text-custom-black italic w-full text-center">
              “1. Fast and accurate at solving mental math problems involving
              addition, subtraction, multiplication, division and percentages
              but without high-level skills that might be required in jobs
              requiring complex calculation and analysis.”
            </p>
          </div>
          <div>
            <p className="text-2xl text-custom-black italic w-full text-center">
              “2. Fast and accurate at solving mental math problems involving
              addition, subtraction, multiplication, division and percentages
              but without high-level skills that might be required in jobs
              requiring complex calculation and analysis.”
            </p>
          </div>
          <div>
            <p className="text-2xl text-custom-black italic w-full text-center">
              “3. Fast and accurate at solving mental math problems involving
              addition, subtraction, multiplication, division and percentages
              but without high-level skills that might be required in jobs
              requiring complex calculation and analysis.”
            </p>
          </div>
          <div>
            <p className="text-2xl text-custom-black italic w-full text-center">
              “4. Fast and accurate at solving mental math problems involving
              addition, subtraction, multiplication, division and percentages
              but without high-level skills that might be required in jobs
              requiring complex calculation and analysis.”
            </p>
          </div>
          <div>
            <p className="text-2xl text-custom-black italic w-full text-center">
              “5. Fast and accurate at solving mental math problems involving
              addition, subtraction, multiplication, division and percentages
              but without high-level skills that might be required in jobs
              requiring complex calculation and analysis.”
            </p>
          </div>
        </Slider>

        <Slider {...settings2} className="my-12 flex flex-row" ref={slider2}>
          <div className="mx-6">
            <div className="flex flex-col justify-center items-center">
              <img src="/person-01.webp" width={100} alt="" />
              <h5 className="text-custom-black text-md font-bold text-center">
                Renee Calhoun
              </h5>
              <span className="text-custom-orange text-sm text-center">
                CEO Wooley
              </span>
            </div>
          </div>
          <div className="mx-6">
            <div className="flex flex-col justify-center items-center">
              <img src="/person-02.webp" width={100} alt="" />
              <h5 className="text-custom-black text-md font-bold text-center">
                Renee Calhoun
              </h5>
              <span className="text-custom-orange text-sm text-center">
                CEO Wooley
              </span>
            </div>
          </div>
          <div className="mx-6">
            <div className="flex flex-col justify-center items-center">
              <img src="/person-03.webp" width={100} alt="" />
              <h5 className="text-custom-black text-md font-bold text-center">
                Renee Calhoun
              </h5>
              <span className="text-custom-orange text-sm text-center">
                CEO Wooley
              </span>
            </div>
          </div>
          <div className="mx-6">
            <div className="flex flex-col justify-center items-center">
              <img src="/person-04.webp" width={100} alt="" />
              <h5 className="text-custom-black text-md font-bold text-center">
                Renee Calhoun
              </h5>
              <span className="text-custom-orange text-sm text-center">
                CEO Wooley
              </span>
            </div>
          </div>
          <div className="mx-6">
            <div className="flex flex-col justify-center items-center">
              <img src="/person-05.webp" width={100} alt="" />
              <h5 className="text-custom-black text-md font-bold text-center">
                Renee Calhoun
              </h5>
              <span className="text-custom-orange text-sm text-center">
                CEO Wooley
              </span>
            </div>
          </div>
        </Slider>

        <Slider {...settings3} className="mt-32 flex flex-row ">
          <div className="mx-6">
            <img src="/company-01.webp" alt="" />
          </div>
          <div className="mx-6">
            <img src="/company-02.webp" alt="" />
          </div>
          <div className="mx-6">
            <img src="/company-03.webp" alt="" />
          </div>
          <div className="mx-6">
            <img src="/company-04.webp" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.string,
};

export default Testimonials;
