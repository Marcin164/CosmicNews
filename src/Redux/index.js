import { combineReducers } from "redux"
import filter from "./filter"
import sort from "./sort"
import pagination from "./pagination"

const allReducers = combineReducers({
    filter,
    sort,
    pagination
})

export default allReducers