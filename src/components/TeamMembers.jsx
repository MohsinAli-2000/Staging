import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamMembers = () => {
  return (
    <div className="px-2 md:px-32">
      <div className="px-4 flex justify-between items-center">
        <div >

        <span className="text-custom-orange font-bold ">OUR TEAM</span>
        <h3 className="font-aldrich text-custom-black text-4xl my-4 " >MEET OUR TEAM</h3>
        </div>
        <button className="text-xl md:text-2xl border-custom-gray border-2 p-2 md:p-4">View All</button>
      </div>
    <div className=" my-6 flex flex-col md:flex-row justify-between w-full">
      <div className="w-full md:w-1/3 h-full my-4  mx-0 md:mx-4 relative">
        <img
          src="/member-01.webp"
          className="w-full h-full object-cover"
          alt="image"
        />
        <div className="absolute bottom-16 ml-6 opacity-100 hover:opacity-0 duration-300 transition-opacity">
          <h5 className="text-xl text-custom-white font-bold">
            Doleres Webster
          </h5>
          <span className="text-custom-orange text-md">CEO & Founder</span>
        </div>
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white h-full p-8 w-full opacity-0 transition-opacity duration-300 hover:opacity-100">
          <h5 className="text-xl font-bold">Doleres Webster</h5>
          <span className="text-custom-orange text-md">CEO & Founder</span>
          <hr className="my-6 text-gray-400" />
          <p className="my-12 text-gray-400">
            Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies
            consectetur. Ut viverra porta leo, non tincidunt mauris condimentum
            eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
          </p>
          <div className="mt-36 text-3xl">
            <FontAwesomeIcon className="mx-4" icon={faFacebook} />
            <FontAwesomeIcon className="mx-4" icon={faTwitter} />
            <FontAwesomeIcon className="mx-4" icon={faInstagram} />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 h-full my-4  mx-0 md:mx-4 relative">
        <div className="h-full">

        <img
          src="/member-01.webp"
          className="w-full object-cover"
          alt="image"
        />
        </div>

        <div className="absolute bottom-16 ml-6 opacity-100 hover:opacity-0 duration-300 transition-opacity">
          <h5 className="text-xl text-custom-white font-bold">
            Doleres Webster
          </h5>
          <span className="text-custom-orange text-md">CEO & Founder</span>
        </div>
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white h-full p-8 w-full opacity-0 transition-opacity duration-300 hover:opacity-100">
          <h5 className="text-xl font-bold">Doleres Webster</h5>
          <span className="text-custom-orange text-md">CEO & Founder</span>
          <hr className="my-6 text-gray-400" />
          <p className="my-12 text-gray-400">
            Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies
            consectetur. Ut viverra porta leo, non tincidunt mauris condimentum
            eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
          </p>
          <div className="mt-36 text-3xl">
            <FontAwesomeIcon className="mx-4" icon={faFacebook} />
            <FontAwesomeIcon className="mx-4" icon={faTwitter} />
            <FontAwesomeIcon className="mx-4" icon={faInstagram} />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 h-full my-4  mx-0 md:mx-4 relative">
        <img
          src="/member-01.webp"
          className="w-full h-full object-cover"
          alt="image"
        />

        <div className="absolute bottom-16 ml-6 opacity-100 hover:opacity-0 duration-300 transition-opacity">
          <h5 className="text-xl text-custom-white font-bold">
            Doleres Webster
          </h5>
          <span className="text-custom-orange text-md">CEO & Founder</span>
        </div>
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white h-full p-8 w-full opacity-0 transition-opacity duration-300 hover:opacity-100">
          <h5 className="text-xl font-bold">Doleres Webster</h5>
          <span className="text-custom-orange text-md">CEO & Founder</span>
          <hr className="my-6 text-gray-400" />
          <p className="my-12 text-gray-400">
            Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies
            consectetur. Ut viverra porta leo, non tincidunt mauris condimentum
            eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.
          </p>
          <div className="mt-36 text-3xl">
            <FontAwesomeIcon className="mx-4" icon={faFacebook} />
            <FontAwesomeIcon className="mx-4" icon={faTwitter} />
            <FontAwesomeIcon className="mx-4" icon={faInstagram} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TeamMembers;
