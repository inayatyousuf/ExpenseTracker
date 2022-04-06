import React from 'react'
import AddForm from '../components/AddForm/AddForm'
import TopFold from '../components/topFold/TopFold'
import './AddExpense.css'
function AddExpense() {
  return (
    <div className="add_expense">
        <TopFold />
        <AddForm />
    </div>
  )
}

export default AddExpense