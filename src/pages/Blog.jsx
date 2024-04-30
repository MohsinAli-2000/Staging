import {
  faAnglesRight,
  faMagnifyingGlass,
  faPaperPlane,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Blog = () => {
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  return (
    <div>
      <Header page="Blogs" />
      <div className="my-12 px-2 md:px-32 flex flex-col md:flex-row">
        <div className="w-full md:w-3/4">
          {/* First Blog Post */}
          <div>
            <p className="text-custom-gray font-semibold">
              <span>{formattedDate}</span> . <span>BY JOHN DOE</span> .{" "}
              <span>PLANNING</span>
            </p>
            <h3 className="text-custom-black text-3xl my-6 font-bold">
              Target and Amazon Shopping List for <br /> Home Stagers
            </h3>
            <img src="/blog-01.webp" alt="image" />
            <div className="px-6 md:px-32 my-6">
              <p className="text-custom-gray text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Risus commodo viverra maecenas accumsan lacus vel facilisis.
              </p>
              <button className="text-custom-black font-bold my-6">
                _______ <span>Read more</span>
              </button>
            </div>
            {/* Quote */}
            <div className="bg-custom-orange p-6 text-white">
              <p className="font-aldrich text-xl text-left">
                “WITHOUT QUESTION THIS IS THE STAGER YOU WANT TO USE! JENNIFER
                STAGED A HARD TO SELL HOME FOR ME AND WE SOLD IT FAST! ….
                JENNIFER MADE IT POSSIBLE.”
              </p>
              <div className="my-4 flex justify-between">
                <span className="font-bold tracking-widest">
                  MARTIN LOCKHART
                </span>
                <FontAwesomeIcon
                  className="font-aldrich text-gray-300 text-4xl"
                  icon={faQuoteLeft}
                />
              </div>
            </div>
          </div>
          {/* Second Blog Post */}
          <div className="my-12">
            <p className="text-custom-gray font-semibold">
              <span>{formattedDate}</span> . <span>BY JOHN DOE</span> .{" "}
              <span>PLANNING</span>
            </p>
            <h3 className="text-custom-black text-3xl my-6 font-bold">
              6 Ideas for Team Building & Employee <br /> Appreciation for Home
              Stagers
            </h3>
            <img src="/blog-02.webp" alt="image" />
            <div className="px-6 md:px-32 my-6">
              <p className="text-custom-gray text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Risus commodo viverra maecenas accumsan lacus vel facilisis.
              </p>
              <button className="text-custom-black font-bold my-6">
                _______ <span>Read more</span>
              </button>
            </div>
          </div>

          <hr className="text-custom-gray my-12" />
          {/* Third Blog */}
          <div className="my-12">
            <p className="text-custom-gray font-semibold">
              <span>{formattedDate}</span> . <span>BY JOHN DOE</span> .{" "}
              <span>PLANNING</span>
            </p>
            <h3 className="text-custom-black text-3xl my-6 font-bold">
              How to Find the Best Price Structure for <br /> Your Home Staging
              Services
            </h3>
            <img src="/blog-03.webp" alt="image" />
            <div className="px-6 md:px-32 my-6">
              <p className="text-custom-gray text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Risus commodo viverra maecenas accumsan lacus vel facilisis.
              </p>
              <button className="text-custom-black font-bold my-6">
                _______ <span>Read more</span>
              </button>
            </div>
          </div>
          <hr className="text-custom-gray my-12" />

          <div>
            <button className="font-bold mx-4 duration-500 transition-colors hover:border-custom-orange hover:border-2 p-2 px-4">
              1
            </button>
            <button className="font-bold mx-4 duration-500 transition-colors hover:border-custom-orange hover:border-2 p-2 px-4">
              2
            </button>
            <button className="font-bold mx-4 duration-500 transition-colors hover:border-custom-orange hover:border-2 p-2 px-4">
              3
            </button>
            <button className="font-bold mx-4 duration-500 transition-colors hover:border-custom-orange hover:border-2 p-2 px-4">
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </div>
        </div>
        {/* Second Part */}
        <div className="ml-0 md:ml-6 w-full md:w-1/4 flex- flex-col">
          <div className="flex flex-col justify-center items-center">
            <img src="/person-03.webp" width={150} alt="image" />
            <p className=" my-4 text-center text-custom-gray">
              Quis ipsum suspendisse ultrices gravid. Risus commodo viverra
              maece accums lacus vel facilisis.
            </p>
            <img src="/signature.webp" alt="image" />
            <div className="w-full flex justify-between border-b  border-custom-gray my-6">
              <input type="text" placeholder="Search..." />
              <button className="text-custom-gray">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
          {/* Categories */}
          <div className="my-6">
            <h5 className="text-2xl font-aldrich">CATEGORIES</h5>
            <p className="text-custom-gray my-2">Work Space</p>
            <p className="text-custom-gray my-2">Office Building</p>
            <p className="text-custom-gray my-2">HomeStay</p>
            <p className="text-custom-gray my-2">Making</p>
            <p className="text-custom-gray my-2">Process</p>
          </div>

          {/* Features News */}
          <div className="my-6">
            <h5 className="text-2xl font-aldrich">FEATURE NEWS</h5>
            <div className="flex justify-center items-center my-4">
              <div>
                <img src="/blog-01.webp" width={250} alt="image" />
              </div>
              <div className="ml-4">
                <p className="text-custom-gray">{formattedDate}</p>
                <h6 className="text-custom-black font-bold">
                  Target and Amazon Shopping List for Home Stagers
                </h6>
              </div>
            </div>
            <div className="flex justify-center items-center my-4">
              <div>
                <img src="/blog-02.webp" width={250} alt="image" />
              </div>
              <div className="ml-4">
                <p className="text-custom-gray">{formattedDate}</p>
                <h6 className="text-custom-black font-bold">
                  6 Ideas for Employee Appreciation for Home Stagers
                </h6>
              </div>
            </div>
            <div className="flex justify-center items-center my-4">
              <div>
                <img src="/blog-03.webp" width={250} alt="image" />
              </div>
              <div className="ml-4">
                <p className="text-custom-gray">{formattedDate}</p>
                <h6 className="text-custom-black font-bold">
                  How to Find the Best Price Structure for Your Home
                </h6>
              </div>
            </div>{" "}
          </div>

          {/* Tags */}
          <div className="my-12">
            <h6 className="text-2xl font-aldrich my-6">TAGS</h6>
            <p className="text-custom-gray font-semibold">
              {" "}
              <span className="hover:text-custom-black">BRANDING</span> .{" "}
              <span className="hover:text-custom-black">OFFICE</span> .{" "}
              <span className="hover:text-custom-black">CREATIVE</span> .{" "}
              <span className="hover:text-custom-black">BUILDING</span> .{" "}
              <span className="hover:text-custom-black">PORTFOLIO</span> .{" "}
              <span className="hover:text-custom-black">PRODUCTS</span> .{" "}
              <span className="hover:text-custom-black">WEBSITE DESIGN</span> .{" "}
              <span className="hover:text-custom-black">WORKING SPACE</span>{" "}
            </p>
          </div>
          {/* FOLLOW US */}
          <div className="my-12 ">
            <h6 className="text-2xl font-aldrich my-6">FOLLOW US</h6>
            <div className="text-xl text-custom-gray flex justify-center items-center">
              <FontAwesomeIcon
                className="mx-6 cursor-pointer"
                icon={faFacebookF}
              />
              <span>___</span>
              <FontAwesomeIcon
                className="mx-6 cursor-pointer"
                icon={faTwitter}
              />
              <span>___</span>
              <FontAwesomeIcon
                className="mx-6 cursor-pointer"
                icon={faInstagram}
              />
              <span>___</span>
              <FontAwesomeIcon
                className="mx-6 cursor-pointer"
                icon={faLinkedinIn}
              />
            </div>
          </div>
          {/* News Letter */}
          <div className="my-12 ">
            <h6 className="text-2xl font-aldrich my-6">NEWS LETTER</h6>
            <div className="text-custom-gray flex border-b justify-between border-custom-gray">
              <input
                type="text"
                className="w-full outline-none"
                placeholder="News Letter"
              />
              <button>
                <FontAwesomeIcon
                  className="text-custom-black"
                  icon={faPaperPlane}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
