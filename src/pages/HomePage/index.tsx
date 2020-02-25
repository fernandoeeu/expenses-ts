import React, { useContext, useEffect } from "react";
import AccountContext from "../../store/context/AccountContext";
import styled from "styled-components";
import IncomeAndDispensesPanel from "../../components/IncomeAndDispensesPanel";
import { initialState } from "../../store/common";
import { stateCtx, useDispatch } from "../../store/state2";

const HomePage: React.FC = () => {
  // @ts-ignore
  // const [{ balance, transactions }, dispatch] = React.useContext<typeof initialState>(
  //   AccountContext
  // );
  const { balance, transactions } = useContext(stateCtx);
  useEffect(() => {
    console.log(transactions);
  });
  const dispatch = useDispatch();
  return (
    <Container>
      <h3>Expense Tracker</h3>
      <h2>{balance}</h2>
      <Subtitle>YOUR BALANCE</Subtitle>
      <Balance>R${balance.toFixed(2)}</Balance>
      <IncomeAndDispensesPanel transactions={transactions} balance={balance} />
      <button onClick={() => dispatch({ type: "UPDATE_BALANCE", value: 10 })}>
        Add
      </button>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.div`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;

  align-self: flex-start;
`;

const Balance = styled.div`
  margin-top: -5px;
  font-size: 32px;

  align-self: flex-start;
`;

export default HomePage;
