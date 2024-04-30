const Project = () => {
  return (
    <div className="flex flex-col justify-center my-12">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 md:px-32">
          <div className="flex flex-col justify-center  items-center w-full my-12">
            <img src="/office-building.webp" alt="image" />
            <h2 className="font-aldrich text-2xl my-4">OFFICE BUILDING</h2>
          </div>
          <div className="flex flex-col justify-center  items-center w-full my-12">
            <img src="/furniture-decorative.webp" alt="image" />
            <h2 className="font-aldrich text-2xl my-4">FURNITURE DECORATIVE</h2>
          </div>
          <div className="flex flex-col justify-center  items-center w-full my-12">
            <img src="/interior-project.webp" alt="image" />
            <h2 className="font-aldrich text-2xl my-4">INTERIOR DESIGN</h2>
          </div>
          <div className="flex flex-col justify-center  items-center w-full my-12">
            <img src="/home-building.webp" alt="image" />
            <h2 className="font-aldrich text-2xl my-4">HOME BUILDING</h2>
          </div>
          <div className="flex flex-col justify-center  items-center w-full my-12">
            <img src="/decoration.webp" alt="image" />
            <h2 className="font-aldrich text-2xl my-4">DECORATION</h2>
          </div>
          <div className="flex flex-col justify-center  items-center w-full my-12">
            <img src="/furniture.webp" alt="image" />
            <h2 className="font-aldrich text-2xl my-4">FURNITURE</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">

      <button className="text-lg font-bold border-custom-gray border-2 w-fit p-4">
        Load More
      </button>
      </div>
    </div>
  );
};

export default Project;
