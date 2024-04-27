const WhoWeAre = () => {
  return (
    <div className="px-2 md:px-32 mt-16 flex flex-col md:flex-row justify-center md:justify-between items-center">
      <div className="w-full md:w-1/2">
        <span className="text-custom-orange text-lg">
          WHO WE ARE
        </span>
        <h1 className="font-aldrich text-custom-black text-4xl my-2">
          WE PROPOSE AND DISCUSS DESIGN RULES
        </h1>
        <p className="text-custom-gray my-6">
          Metasurfaces are generally designed by placing scatterers in periodic
          or pseudo-periodic grids. We propose and discuss design rules for
          functional metasurfaces with randomly placed.
        </p>
        <p className="text-custom-gray">
          Anisotropic elements that randomly sample. Quisque sit amet nisl ante.
          Fusce lacinia non tellus id gravida. Cras neque dolor, volutpat et
          hendrerit et.
        </p>
        <button className="border-custom-gray border-2 my-12 p-4">
          Learn More
        </button>
      </div>
      <div className="w-full md:w-1/2 ml-0 md:ml-16">
        <img src="/WhoWeAre-image.webp" className="w-full" alt="image" />
      </div>
    </div>
  );
};

export default WhoWeAre;
