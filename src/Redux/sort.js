const sort = (sort = "publishedAt:DESC", action) => {
    switch(action.type){
        case "SET_SORT":
            sort = action.payload.data
            return sort;
        default:
            return sort;
    }
}

export default sort