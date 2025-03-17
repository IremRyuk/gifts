import { combineReducers } from "redux";
import { SearchDataRed } from "./Reducer/SearchDataRed";
import { DataFilterRed, FilterPrice } from "./Reducer/DataFilterRed";
export const AllReducer = combineReducers({
    search:SearchDataRed,
    dataFilter:DataFilterRed,
    price:FilterPrice
})