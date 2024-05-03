import "slick-carousel/slick/slick.css";
import { useRef, useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const [centralIndex, setCentralIndex] = useState(0);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);

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

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCentralIndex(newIndex);
  };

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
    beforeChange: handleBeforeChange,
    responsive: [
      {
        breakpoint: 768,
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
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: false,
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

  const testimonials = [
    "Fast and accurate at solving mental math problems involving addition, subtraction, multiplication, division and percentages but without high-level skills that might be required in jobs requiring complex calculation and analysis.",
    "Fast and accurate at solving mental math problems involving addition, subtraction, multiplication, division and percentages but without high-level skills that might be required in jobs requiring complex calculation and analysis.",
    "Fast and accurate at solving mental math problems involving addition, subtraction, multiplication, division and percentages but without high-level skills that might be required in jobs requiring complex calculation and analysis.",
    "Fast and accurate at solving mental math problems involving addition, subtraction, multiplication, division and percentages but without high-level skills that might be required in jobs requiring complex calculation and analysis.",
    "Fast and accurate at solving mental math problems involving addition, subtraction, multiplication, division and percentages but without high-level skills that might be required in jobs requiring complex calculation and analysis.",
  ];

  const imageItems = [
    { src: "/person-01.webp", name: "Renee Calhoun", position: "CEO Wooley" },
    { src: "/person-02.webp", name: "Renee Calhoun", position: "CEO Wooley" },
    { src: "/person-03.webp", name: "Renee Calhoun", position: "CEO Wooley" },
    { src: "/person-04.webp", name: "Renee Calhoun", position: "CEO Wooley" },
    { src: "/person-05.webp", name: "Renee Calhoun", position: "CEO Wooley" },
  ];

  const companyLogos = [
    { src: "/company-01.webp" },
    { src: "/company-02.webp" },
    { src: "/company-03.webp" },
    { src: "/company-04.webp" },
  ];

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
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <p className="text-2xl text-custom-black italic w-full text-center">
                {testimonial}
              </p>
            </div>
          ))}
        </Slider>

        <Slider
          {...settings2}
          className="my-12 px-8 md:px-32 flex flex-row justify-center items-center"
          ref={slider2}
        >
          {imageItems.map((item, index) => (
            <div
              key={index}
              className={`mx-64 ${
                index === centralIndex ? "flex justify-center" : ""
              }`}
              style={{
                width: index === centralIndex ? "500px" : "200px",
              }}
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  src={item.src}
                  width={index === centralIndex ? 500 : 100}
                  alt="image"
                  className="mx-72"
                />
                <h5 className="text-custom-black text-md font-bold text-center">
                  {item.name}
                </h5>
                <span className="text-custom-orange text-sm text-center">
                  {item.position}
                </span>
              </div>
            </div>
          ))}
        </Slider>

        <Slider {...settings3} className="mt-32 flex flex-row" ref={slider3}>
          {companyLogos.map((item, index) => (
            <div className="mx-6" key={index}>
              <img src={item.src} alt="" />
            </div>
          ))}
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
