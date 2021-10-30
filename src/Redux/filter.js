const filter = (filter = {titleFilter:"", siteFilter: ""}, action) => {
    switch(action.type){
        case "SET_FILTER":
            filter = action.payload.data
            return filter;
        default:
            return filter;
    }
}

export default filter