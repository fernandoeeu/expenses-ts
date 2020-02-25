import React, { createContext } from "react";
import { initialState, Actions } from "../common";

export type StoreApi = {
  state: typeof initialState;
  dispatch: React.Dispatch<Actions>;
};

interface IContextProps {
  state: typeof initialState;
  dispatch: ({ type }: { type: string }) => void;
}

const AccountContext = createContext<StoreApi | typeof initialState>(
  initialState
);

// const AccountContext = createContext({} as IContextProps[]);

export default AccountContext;
