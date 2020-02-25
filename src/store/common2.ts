export const initialState = {
  balance: 0,
  transactions: []
};

export type State = typeof initialState;

export type Action = {
  type: "UPDATE_BALANCE";
  value: number;
};

export const accountReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE_BALANCE":
      return { ...state, balance: state.balance + action.value };
    default:
      return state;
  }
};
