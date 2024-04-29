import PropTypes from "prop-types";

const BlogCard = ({ imgSrc, category, content }) => {
  return (
    <div className="mx-2 my-4">
      <div>
        <img src={imgSrc} alt="image" className="w-full h-64 object-cover" />
        <div>
          <span className="text-custom-gray ml-4 my-4 font-semibold tracking-widest">
            {category}
          </span>
          <h4 className="text-2xl w-full font-medium">{content}</h4>

          <button className="font-semibold my-4">Read more</button>
          <span className="text-custom-orange mx-2 font-bold">_______</span>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  imgSrc: PropTypes.string,
  category: PropTypes.string,
  content: PropTypes.string,
};

export default BlogCard;
