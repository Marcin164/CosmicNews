import { combineReducers } from "redux"
import filter from "./filter"
import sort from "./sort"
import pagination from "./pagination"
import favourites from "./favourites"

const allReducers = combineReducers({
    filter,
    sort,
    pagination,
    favourites
})

export default allReducers