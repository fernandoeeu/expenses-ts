import { createContext } from "react";

interface Transaction {
  label: string;
  amount: number;
}

export interface Account {
  balance: number;
  transactions?: Transaction[];
}

export const initialState = {
  balance: 0,
  transactions: []
};

const AccountContext = createContext<Account>(initialState);

export default AccountContext;
