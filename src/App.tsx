import React, { useReducer } from "react";
import AccountContext from "./store/context/AccountContext";
import { accountReducer } from "./store/accountReducer";
import { initialState } from "./store/common";

import "./App.css";
import HomePage from "./pages/HomePage";
import { Provider } from "./store/state2";

// const Provider = AccountContext.Provider;
// const Consumer = AccountContext.Consumer;

const App: React.FC = () => {
  const useAccountState = useReducer(accountReducer, initialState);
  return (
    // @ts-ignore
    <Provider>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
};

export default App;
