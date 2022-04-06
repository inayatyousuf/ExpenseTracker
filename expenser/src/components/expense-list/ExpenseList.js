import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../pages/Card'
import './ExpenseList.css'
function ExpenseList() {
  const { expenseList: list, query } = useSelector((state) => state.expenses)
  const filteredList = list.filter((item) => item.title.includes(query));
  console.log(filteredList)
  return (
    <div className="expense-list"> 
       { 
         list.length ? (
           list.map((item) => (<Card item={item} />))
           ):(
             <div className="empty-expense-message">oh! Your Expense List is Empty</div>
           )
         
       }
    </div>
  )
}

export default ExpenseList