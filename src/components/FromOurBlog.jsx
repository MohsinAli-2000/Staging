import BlogCard from "./BlogCard";

const FromOurBlog = () => {
  return (
    <div className="px-2 md:px-32 my-12">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-custom-orange font-bold ">LATEST NEWS</span>
          <h3 className="font-aldrich text-custom-black text-4xl my-4 ">
            FROM OUR BLOG
          </h3>
        </div>
        <button className="text-xl md:text-2xl border-custom-gray border-2 p-2 md:p-4">
          View All
        </button>
      </div>
      <div className="my-6 flex flex-col md:flex-row">
        <BlogCard imgSrc="/architecture.webp" category="ARCITECTURE" content="5 Ideas for to design and build a great architecture in modern era"/>
        <BlogCard imgSrc="/interior.webp" category="INTERIOR" content="8 Ideas for Team Building and Employee Appreciation for Home Stagers" />
        <BlogCard imgSrc="/planning.webp" category="PLANNING" content="How to Find the Best Price Structure for Your Home Staging Services"/>
      </div>
    </div>
  );
};

export default FromOurBlog;
