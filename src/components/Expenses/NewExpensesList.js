import ExpenseItem from "./ExpenseItem";
const NewExpensesList=(props)=>{


return(

<>
    { props.items.length === 0 ? (
        <p className="notFound">No Expenses Found!</p>
      ) : (
        props.items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      )}
    </>  
)

}

export default NewExpensesList;