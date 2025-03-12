import { combineReducers } from "redux";
import { SearchDataRed } from "./Reducer/SearchDataRed";
export const AllReducer = combineReducers({
    search:SearchDataRed
})