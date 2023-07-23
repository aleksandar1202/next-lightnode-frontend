import { UPDATE_WALLET } from "../action-types";

const initState = {
  address: null,
};

interface Action {
  type: string;
  payload: any;
}

const walletReducer = (state: Object = initState, action: Action) => {
  switch (action.type) {
    case UPDATE_WALLET:
      return { ...state, address: action.payload.address };
    default:
      return state;
  }
};

export default walletReducer;
