import React ,{useState} from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
 


  const NewExpense=(props)=>{

    const [form ,setForm]=useState(false)

    const ExpenseDataHandler=(expenseData)=>{

     const ExpenseData={
      
        ...expenseData,
        id:Math.random().toString()

     }
    //  console.log(ExpenseData)
    props.onAddExpense(ExpenseData)
    setForm(false)
    }
   


    const isform=()=>{

       setForm((prevVal)=> !prevVal)

    }


    return  <div className='new-expense'>
    {form ? <ExpenseForm onCancel={isform} onSaveExpenseData={ExpenseDataHandler}/> : <button type='button' onClick={isform}>Add new Expense </button>
            }
            
          </div>

}

export default NewExpense;