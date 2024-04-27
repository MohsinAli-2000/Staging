import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const bgimage = {
    backgroundImage: ' url("/background-image.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    
  };

  const [sidebar, setSidebar] = useState(false);
  const [Menu, setMenu] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const showSidebar = () => {
    sidebar ? setSidebar(false) : setSidebar(true);
  };
  const showMenu = () => {
    Menu ? setMenu(false) : setMenu(true);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setSidebar(false);

    setDropDown(false);
  };

  const handleDropDownClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <>
      {/* Navbar for small devices  */}
      <div className="lg:hidden z-50" style={bgimage}>
        <div className="flex justify-between items-center py-6 px-3 inset-0 ">
          <img src="/logo.webp" alt="logo-png" />
          <FontAwesomeIcon
            className="text-white text-2xl font-extrabold  border-2  border-white p-2 cursor-pointer"
            onClick={showSidebar}
            icon={faBars}
          />
        </div>
        <div
          className={`sideMenu text-white bg-custom-black w-3/4 max-w-80 h-screen px-6 pt-12 absolute top-0 ${
            sidebar ? "-ml-0" : "-ml-80"
          } transition-all `}
        >
          <img src="/logo.webp" alt="logo-png" />
          <div className="flex flex-col bg-custom-bg-black justify-center p-4 mt-6">
            <div className="flex justify-end w-fit max-w-96 ml-32 items-center bg-custom-black gap-2 p-1 rounded">
              <h1 className="text-base font-extrabold">MENU</h1>
              <FontAwesomeIcon
                className="font-extrabold"
                onClick={showMenu}
                icon={faBars}
              />
            </div>
            <div className={`${Menu ? "hidden" : ""}`}>
              <ul>
                <li>
                  <NavLink onClick={handleMenuClick} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleMenuClick} to="/projects">
                    Project
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleMenuClick} to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <span onClick={handleDropDownClick}>
                    Pages{" "}
                    <FontAwesomeIcon
                      className={`${
                        !isOpen ? "-rotate-90" : ""
                      } transition-all`}
                      icon={faCaretDown}
                    />
                  </span>
                  {isOpen && (
                    <ul className="ml-5 ease-in-out">
                      <li>
                        <NavLink onClick={handleMenuClick} to="/about">
                          About
                        </NavLink>
                      </li>
                      <li>
                        <NavLink onClick={handleMenuClick} to="/services">
                          Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink onClick={handleMenuClick} to="/blog-details">
                          Blog Details
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <NavLink onClick={handleMenuClick} to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleMenuClick} to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <p className="font-aldrich text-custom-gray text-sm">
            Call us for any questions
          </p>
          <p className="font-aldrich text-custom-orange text-xl my-4">
            +01 123 456 789
          </p>
        </div>
      </div>

      {/* Navbar for large devices */}
      <div className="hidden lg:block  py-6 px-4" style={bgimage}>
        <div className="flex justify-between  items-center">
          <img src="/logo.webp" alt="logo" />
          <div>
            <ul className="flex gap-12 text-xl font-semibold text-custom-white">
              <li
                onClick={() => handleMenuClick("Home")}
                className={`${
                  activeMenu === "Home" ? "border-b-4 border-custom-orange" : ""
                } hover:border-b-4 border-custom-orange transition-all`}
              >
                <NavLink to="/">Home</NavLink>
              </li>
              <li
                onClick={() => handleMenuClick("projects")}
                className={`${
                  activeMenu === "projects"
                    ? "border-b-4 border-custom-orange"
                    : ""
                } hover:border-b-4 border-custom-orange transition-all`}
              >
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li
                onClick={() => handleMenuClick("about")}
                className={`${
                  activeMenu === "about"
                    ? "border-b-4 border-custom-orange"
                    : ""
                } hover:border-b-4 border-custom-orange transition-all`}
              >
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <span
                  className="cursor-pointer"
                  onMouseEnter={() => setDropDown(true)}
                  onMouseLeave={() => setDropDown(false)}
                >
                  Pages
                  {dropDown && (
                    <ul className="bg-custom-white  text-custom-black text-lg absolute top-16 py-2 px-4 font-light">
                      <li>
                        <NavLink
                          to="/about"
                          onClick={() => handleMenuClick("about")}
                        >
                          About
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/services">Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog-details">Blog Details</NavLink>
                      </li>
                    </ul>
                  )}
                </span>
              </li>

              <li
                onClick={() => handleMenuClick("blog")}
                className={`${
                  activeMenu === "blog" ? "border-b-4 border-custom-orange" : ""
                } hover:border-b-4 border-custom-orange transition-all`}
              >
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li
                onClick={() => handleMenuClick("contact")}
                className={`${
                  activeMenu === "contact"
                    ? "border-b-4 border-custom-orange"
                    : ""
                } hover:border-b-4 border-custom-orange transition-all`}
              >
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-custom-gray font-aldrich">
              Call us for any questions
            </p>
            <p className="text-custom-orange text-2xl font-aldrich">
              +01 123 456 789
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
