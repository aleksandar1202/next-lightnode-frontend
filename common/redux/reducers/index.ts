import { combineReducers } from "redux";
import walletReducer from "./wallets-reducer";

const rootReducer = combineReducers({
  walletReducer,
});

export default rootReducer;
