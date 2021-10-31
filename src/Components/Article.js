import {useState} from "react"
import { Link } from "react-router-dom";

const Article = (props) => {

  const [style, setStyle] = useState((window.localStorage.getItem(props.id)) ? "text-gray-200 bg-yellow-500" : "text-yellow-500 bg-gray-200")
  const [buttonText, setButtonText] = useState((window.localStorage.getItem(props.id)) ? "Remove from favourites" : "Add to favourites")

  const toggleFavourite = () => {
    (window.localStorage.getItem(props.id) === null || window.localStorage.getItem(props.id) === undefined) ? addFavourite() : deleteFavourite()
    window.localStorage.clear()
  }

  const addFavourite = () => {
    window.localStorage.setItem(props.id.toString(), "id_in="+props.id)
    setButtonText("Remove from favourites")
    setStyle("text-gray-200 bg-yellow-500")
  }

  const deleteFavourite = () => {
    window.localStorage.removeItem(props.id.toString())
    setButtonText("Add to favourites")
    setStyle("text-yellow-500 bg-gray-200")
  }

  if(window.localStorage){
    return (
      <div className="rounded overflow-hidden shadow-2xl my-3 md:w-3/7 lg:w-2/7 h-full">
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
        <button className={`w-full z-10 mb-1 py-3 text-center ${style}`} onClick={toggleFavourite}>{buttonText}</button>
      </div>
    );
  }else{
    <div>
      <span>Ładowanie artykułu</span>
    </div>
  }
  
};

export default Article;
