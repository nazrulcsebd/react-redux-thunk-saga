import { combineReducers } from "redux";
import AuthReducer from "./reducers/authReducher";
import UserReducher from "./reducers/userReducher";
import * as requestLoader from "./reduck/loaderDucks/requestLoader.duck";

const RootReducer = combineReducers({
  auth: AuthReducer,
  userReducher: UserReducher,
  requestLoader: requestLoader.reducer
});

export default RootReducer;
