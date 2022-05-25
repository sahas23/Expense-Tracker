import "./NewExpenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import NewExpensesList from "./NewExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function NewExpenses(props) {
  const [year, setYear] = useState("");

  const addYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div className="expenses">
      <ExpensesFilter addYearHandler={addYearHandler} />
      <ExpensesChart expenses={filteredExpenses}/>

      <NewExpensesList items={filteredExpenses}/>
    </div>
  );
}
