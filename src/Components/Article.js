import { Link } from "react-router-dom";
import FavouritesButton from "./FavouritesButton";

const Article = (props) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-2xl my-3 md:w-3/7 lg:w-2/7 h-full">
      <Link to={`articles/${props.id}`} className="w-full">
        <img src={props.imageUrl} alt={props.imageUrl} className="w-full" />
        <div className="pt-2 pb-0.5 px-2 font-semibold text-xl md:text-2xl xl:text-2xl">
          <span>{props.title}</span>
        </div>
        <div className="pt-0.5 pb-2 px-2 font-extralight text-gray-400 md:text-xl xl:text-xl">
          <span>{props.publishedAt.slice(0, 10)}</span>
          <span className="ml-3">{props.newsSite}</span>
        </div>
      </Link>
      <FavouritesButton
        id={props.id}
        imageUrl={props.imageUrl}
        title={props.title}
        newsSite={props.newsSite}
      />
    </div>
  );
};

export default Article;
