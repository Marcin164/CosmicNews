import {useState} from "react"

const FavouritesButton = (props) => {
    const [isFavourite, setIsFavourite] = useState((window.localStorage.getItem(props.id) === null) ? false : true)

    const toggleFavourites = () => {
        if(!isFavourite){
            window.localStorage.setItem(props.id, props.id)
            setIsFavourite(true)
        }else{
            window.localStorage.removeItem(props.id)
            setIsFavourite(false)
        }
    }

  return (
    <button className={`w-full p-4 text-xl ${(!isFavourite) ? "bg-gray-300" : "bg-yellow-400"}`} onClick={toggleFavourites}>
      {(!isFavourite) ? "Add to favourites" : "Remove from favourites"}
    </button>
  );
};

export default FavouritesButton;