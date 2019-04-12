import { combineReducers } from "redux";
import screenSizes from "./screenSizesReducer";
import deviceType from "./deviceTypeReducer";
import searchBar from "./searchBarReducer";

export default combineReducers({
  screenSizes,
  deviceType,
  searchBar
});
