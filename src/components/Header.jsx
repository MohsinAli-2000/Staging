import PropTypes from "prop-types"

const Header = ({page}) => {
    const bgimage = {
        backgroundImage: 'url("/background-image.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      };
  return (
    <div>

    <div className="text-custom-white w-full h-72 flex flex-col justify-center items-center" style={bgimage}>
      <h1 className="font-aldrich text-4xl">{page}</h1>
      <span className="">Home ~ <span className="text-custom-orange">{page}</span></span>
    </div>
    </div>
  )
}

Header.propTypes = {
    page: PropTypes.string,
    
  };

export default Header
