import { combineReducers } from "redux"
import filter from "./filter"
import sort from "./sort"

const allReducers = combineReducers({
    filter,
    sort
})

export default allReducers