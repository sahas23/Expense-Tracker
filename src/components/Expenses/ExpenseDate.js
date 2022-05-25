
import './ExpenseDate.css'


export default function ExpenseDate(props){


    const month = props.date.toLocaleString('en-US' , {month : 'long'})
    const day = props.date.toLocaleString('en-US' ,{day : '2-digit'} )
    const year = props.date.getFullYear()

  return (
   <div className='calender'>
  <div className='expensemonth'>{month}</div>
  <div className='expenseyear'>{year}</div>
  <div className='expenseday'>{day}</div>
  </div>
        )

}