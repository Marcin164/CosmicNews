import React, { useContext } from "react";
import { SideBarContext } from "../Pages/Dashboard";

const FavouritesCheckbox = () => {
  const functions = useContext(SideBarContext);
  return (
    <label className="block py-1 md:text-3xl xl:text-2xl">
      <input type="checkbox" onChange={functions.getFavourites} />
      <span className="ml-1">Show favourites</span>
    </label>
  );
};

export default FavouritesCheckbox;
