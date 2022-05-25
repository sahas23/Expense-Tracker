import "./ExpenseForm.css";
import {useState} from 'react'

 const ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredAmount,setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')

    //another way
            //  const [userInput,setUserInput]  = useState({

            //         enteredTitle:'',
            //         enteredAmount:'',
            //         enteredDate:''
            //     })




      const titleChangeHandler=(e)=>{
           setEnteredTitle(e.target.value)
      }

//when we use this there may be  chane that prevdata may not get correctly as react shedules state updates not updates ur state immediatley so prefer 2nd approach

//1st approach
    //       setUserInput({

    //         ...userInput,
    //         enteredTitle : e.target.value
    //       })
    //   }
               
    //2nd approach react make sure to give correct update state if updated state depends on old state
            //  setUserInput((prevState)=>{return {...prevState,enteredTitle:e.target.value}})

  

     
     const amountChangeHandler=(e)=>{

        setEnteredAmount(e.target.value)
        // setUserInput({

        //     ...userInput,
        //     enteredAmount : e.target.value
        //   })

     }
     const dateChangeHandler=(e)=>{

        setEnteredDate(e.target.value)

    //     setUserInput({

    //         ...userInput,
    //         enteredDate : e.target.value
    //       })
      }

   const submitHandler=(e)=>{

   e.preventDefault()

     const expenseData={
         title  :   enteredTitle,
         amount : +enteredAmount,
         date   : new Date(enteredDate)
}   

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
//    console.log(expenseData)
   props.onSaveExpenseData(expenseData)
   }

    //  console.log(enteredTitle)
    //  console.log(enteredAmount)
    //  console.log(enteredDate)

 

 


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input value={enteredTitle} onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input value={enteredAmount} onChange={amountChangeHandler}  type="number" min='0.01' step='0.01' />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31'/>
        </div>
      </div>
      <button type="button" className="new-expense__actions" onClick={props.onCancel}>Cancel</button>
      <button className="new-expense__actions" type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm
