const pagination = (page = 1, action) => {
    switch(action.type){
        case "SET_PAGE":
            page = action.payload.data
            return page
        default:
            return page;
    }
}

export default pagination