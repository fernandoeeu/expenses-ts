import { Actions, Account } from "./common";

export const accountReducer = (state: Account, action: Actions) => {
  switch (action.type) {
    case "UPDATE_BALANCE":
      return { ...state, balance: state.balance + action.value };
    default:
      return state;
  }
};
