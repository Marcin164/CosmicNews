const favourites = (favourites = false, action) => {
    switch(action.type){
        case "SHOW_FAVS":
            favourites = action.payload.data
            return favourites;
        default:
            return favourites;
    }
}

export default favourites