import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const bgimage = {
    backgroundImage: ' url("/bg-image.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };
  return (
    <>
      <div style={bgimage}>
        <div className="flex justify-between items-center py-6 px-3">
          {/* Navbar for small devices  */}

          <img src="/logo.webp" alt="logo-png" />
          <FontAwesomeIcon
            className="text-white text-2xl font-extrabold  border-2  border-white p-2"
            icon={faBars}
          />
        </div>
        <div className="sideMenu text-white bg-custom-black w-3/4 h-screen px-6 pt-12 absolute top-0">
          <img src="/logo.webp" alt="logo-png" />
          <div className="flex bg-custom-bg-black justify-end py-2 px-2 mt-6">
            <div className="flex items-center bg-custom-black gap-2 p-1 rounded">
              <h1 className="text-base font-extrabold">MENU</h1>
              <FontAwesomeIcon className="font-extrabold" icon={faBars} />
            </div>
          </div>
          <p className="font-aldrich text-custom-gray text-sm">
            Call us for any questions
          </p>
          <p className="font-aldrich text-custom-orange text-xl my-4">+01 123 456 789</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
