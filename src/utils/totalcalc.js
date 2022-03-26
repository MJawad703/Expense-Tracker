import React, { useContext } from "react";

import { ExpenseTrackerContext } from "../context/Context";

export const useTotalCalc = (title) => {
  const { transactions } = useContext(ExpenseTrackerContext);
  const dataPerType = transactions.filter((e) => e.type === title);
  const total = dataPerType.reduce(
    (acc, currval) => (acc += currval.amount),
    0
  );
  return total;
};
