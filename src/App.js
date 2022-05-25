import React ,{useState} from "react";
// import ExpenseItem from "./components/ExpenseItem";
import NewExpenses from "./components/Expenses/NewExpenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
 
 
const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  
  const [expenses,setExpenses] = useState(initialExpenses)
 
  const addExpenseHandler = (expense) => {
    // console.log("in app.js");
    // console.log(expense);
    setExpenses((prevExpenses)=>{
         return [expense , ...prevExpenses]

    })
  };

  // const addYearHandler=(selectedYear)=>{

  //     //  const filteredYear =  selectedYear
  //       // console.log(filteredYear)

        
  //   return (expenses.filter((expense)=>{

  //        return expense.date.getFullYear().toString() === selectedYear;
  //    })
  //   )

    

  // }


   

  return (

    <div className="App">
          
        <NewExpense onAddExpense={addExpenseHandler} /> 
          
        <Card className="expenses">
        
        <NewExpenses expenses={expenses} />
      </Card>
    </div>
  );
}

export default App;
