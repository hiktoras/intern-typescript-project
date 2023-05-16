import React from "react";
import { TransactionData } from "../../types";

export interface TransactionProps {
  transactionDataList: TransactionData[];
}

const Header = () => {
  return <p>Transaction</p>;
};

export default Header;
