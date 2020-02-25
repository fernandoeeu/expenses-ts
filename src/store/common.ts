export const initialState = {
  balance: 0,
  transactions: []
};

type UpdateBalance = {
  readonly type: "UPDATE_BALANCE";
  readonly value: number;
};

export interface Transaction {
  label: string;
  amount: number;
}

export interface Account {
  balance: number;
  transactions?: Transaction[];
}

export type Actions = UpdateBalance;
