import OwlCarousel from "react-owl-carousel";


const ImageCarousel = () => {
  const options = {
    nav: true,
    dots: false,
    items: 4,
    loop: true,
    margin: 20,
    center: true,
    touchDrag: true,
    navText: ["<span class='custom-nav-text'><</span>",
    "<span class='custom-nav-text'>></span>"],
    responsive: {
      // Show 1 card at a time on small screens
      0: {
        items: 1,
      },
      // Show 4 cards at a time on larger screens
      768: {
        items: 4,
      },
    },
  };

  return (
    <div className="px-2 w-full h-full flex flex-col justify-center items-center md:px-8 mt-16">
        <span className="text-custom-orange text-lg font-semibold">OUR WORKS</span>
        <h2 className="font-aldrich text-custom-black text-4xl my-6">LATEST PROJECTS</h2>
      <OwlCarousel className="owl-theme" {...options}>
        
        <div className="item">
          <div className="w-full h-full">
            <img
              src="/image-04.jpg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="item">
          <div className="w-full h-full">
            <img
              src="/image-03.jpg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="item">
          <div className="w-full h-full">
            <img
              src="/image-04.jpg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="item">
          <div className="w-full h-full">
            <img
              src="/image-03.jpg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="item">
          <div className="w-full h-full">
            <img
              src="/image-04.jpg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="item">
          <div className="w-full h-full">
            <img
              src="/image-03.jpg"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default ImageCarousel;
