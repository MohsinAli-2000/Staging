import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import {
  faArrowLeft,
  faArrowRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const BlogDetails = () => {
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
      <Header page="Blog Details" />
      <div className="px-2 md:px-32 my-24">
        <div className="">
          <p className="text-custom-gray font-semibold">
            {" "}
            <span>{formattedDate}</span> .{" "}
            <span className="mx-3 md:mx-6"> BY JOHN DOE</span> .{" "}
            <span className="mx-3 md:mx-6">PLANNING</span>{" "}
          </p>
          <h1 className="text-5xl text-custom-black font-bold my-6">
            Target and Amazon Shopping List for Home Stagers
          </h1>
          <img src="/post-01.webp" className="w-full" alt="" />
          <p className="my-6 text-custom-gray">
            Forget Ebay and other forms of advertising for your property that
            costs you hard earned money. Properties have ready several locations
            around the world to take your free listings for any luxury property
            you have.
          </p>
          <p className="my-6 text-custom-gray">
            Each location web site is purpose built so every Search Engine will
            pick up new listings within minutes. This way your customers only
            have to type in keywords relating to their search for a luxury home
            and the Search Engine will show the Invest Asset web site applicable
            to their location they are looking for.
          </p>
          <p className="my-6 text-custom-gray">
            Most real estate companies are way too busy with selling their
            client’s properties to put any effort forth to their web site.
            Hence, making it difficult for web surfers to find their listings.
          </p>

          {/* Quote */}
          <div className="bg-custom-orange p-6 text-white">
            <p className="font-aldrich text-xl text-left">
              “WITHOUT QUESTION THIS IS THE STAGER YOU WANT TO USE! JENNIFER
              STAGED A HARD TO SELL HOME FOR ME AND WE SOLD IT FAST! …. JENNIFER
              MADE IT POSSIBLE.”
            </p>
            <div className="my-4 flex justify-between">
              <span className="font-bold tracking-widest">MARTIN LOCKHART</span>
              <FontAwesomeIcon
                className="font-aldrich text-gray-300 text-4xl"
                icon={faQuoteLeft}
              />
            </div>
          </div>

          <p className="text-custom-gray my-6">
            Now times have changed and we at Investment Assets Properties are
            thinking of the customer before the business. If you have a property
            in a location not listed at Investment Assets Properties. Don’t
            worry. A quick email to us will ensure your location is built to
            accommodate your listing.
          </p>

          <p className="text-custom-gray my-6">
            Selling your luxury home, condominium or property should not be a
            painstaking event. It should be easy and stress free and it should
            be able to be advertised on a global scale for free. Investment
            Assets Properties can and will do this for you in a hassle free way.
          </p>
          {/* images  */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <img src="/image-01.jpg" className=" md:w-2/6" alt="image" />
            <img src="/image-02.jpg" className=" md:w-2/6" alt="image" />
            <img src="/image-03.jpg" className=" md:w-2/6" alt="image" />
          </div>

          {/* Tags */}
          <div className="flex flex-col md:flex-row my-12 justify-center items-center md:justify-between">
            <p className="text-custom-black">
              Tags:{" "}
              <span className="text-custom-gray font-semibold">BRANDING .</span>
              <span className="text-custom-gray font-semibold">
                OFFICE .
              </span>{" "}
              <span className="text-custom-gray font-semibold">CREATIVE .</span>
            </p>
            <div className="gap-8 text-xl mt-4 md:mt-0 text-custom-gray">
              <FontAwesomeIcon
                className="mx-6 cursor-pointer"
                icon={faFacebookF}
              />
              <FontAwesomeIcon
                className="mx-6 cursor-pointer"
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className="mx-6 cursor-pointer"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="mx-6 cursor-pointer"
                icon={faLinkedinIn}
              />
            </div>
          </div>

          {/* Dana Vaughn */}
          <div className="flex flex-col md:flex-row bg-gray-200 justify-between p-12">
            <img src="/person-03.webp" width={150} alt="" />
            <div className="my-6 md:my-0 ml-0 md:ml-12">
              <h5 className="text-custom-black text-xl font-bold">
                Dana Vaughn
              </h5>
              <p className="text-custom-gray w-full md:w-3/4">
                Now times have changed and we at Investment Assets Properties
                are thinking of the customer before the business. If you have a
                property in a location not listed at Investment Assets
                Properties.
              </p>
            </div>
          </div>
          {/* Next & Previos Post Naviagation */}
          <div className="flex justify-between items-center my-12">
            <div className="flex justify-center items-center my-4">
              <div>
                <img src="/interior.webp" width={150} alt="image" />
              </div>
              <div className="ml-4">
                <p className="text-custom-gray">
                  <FontAwesomeIcon className="mx-2" icon={faArrowLeft} />
                  Previos post
                </p>
                <h6 className="text-custom-black font-bold  text-lg">
                  Popular uses of the internet
                </h6>
              </div>
            </div>

            <div className="flex justify-center items-center my-4">
              <div>
                <img src="/planning.webp" width={150} alt="image" />
              </div>
              <div className="ml-4">
                <p className="text-custom-gray ">
                  <FontAwesomeIcon className="mx-2" icon={faArrowRight} />
                  Next post
                </p>
                <h6 className="text-custom-black font-bold text-lg">
                  Help finding information online
                </h6>
              </div>
            </div>
          </div>
          <div className="my-12">
            <h4 className="font-aldrich text-4xl text-custom-black">
              LEAVE A REPLY
            </h4>
            <form action="submit">
              <div className="flex flex-col w-full md:flex-row">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-4 border mx-2 my-4 w-full border-custom-gray outline-none"
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  className="p-4 border w-full mx-2 my-4 border-custom-gray outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-4 border w-full mx-2 my-4 border-custom-gray outline-none"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Comment"
                id="1"
                className="p-4 w-full border mx-2 my-4 border-custom-gray outline-none resize-none"
                cols="50"
                rows="5"
              ></textarea>
              <button className="text-custom-white mx-2 bg-custom-black p-2 px-4">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
