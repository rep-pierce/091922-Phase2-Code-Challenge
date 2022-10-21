import React from "react";
import Transaction from "./Transaction";
import { useEffect, useState } from "react";

function TransactionsList() {

  const [transactions, setTransaction] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
    .then((r) => r.json())
    .then(setTransaction)
  }, [])
  console.log(transactions, "in the function")

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {/* {transactions.map(transaction => <Transaction key={transaction.index} transaction={transaction} />) } */}
      </tbody>
    </table>
  );
}

export default TransactionsList;
