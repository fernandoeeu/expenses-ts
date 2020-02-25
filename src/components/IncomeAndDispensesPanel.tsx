import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Transaction } from "../store/common";

interface Props {
  transactions: Transaction[];
  balance: number;
}

const IncomeAndDispensesPanel: React.FC<Props> = ({
  transactions,
  balance
}) => {
  const [expenses, setExpenses] = useState(0);
  const [income, setIncome] = useState(0);
  useEffect(() => {
    console.log(transactions);
  }, [transactions]);
  return (
    <Container>
      <div className="income-container">
        <div className="income">{balance}</div>
        <div className="income-value">R${income.toFixed(2)}</div>
      </div>
      <div className="divider" />
      <div className="expenses-container">
        <div className="expenses">EXPENSE</div>
        <div className="expenses-value">R${expenses.toFixed(2)}</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;

  & .divider {
    height: 40%;
    width: 1px;
    background: #ddd;
  }

  & .income-container,
  .expenses-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .income-value {
    color: green;
  }

  & .expenses-value {
    color: red;
  }
`;

export default IncomeAndDispensesPanel;
