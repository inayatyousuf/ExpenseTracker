import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './TopFold.css'
import {useDispatch} from 'react-redux'
import { searchExpense } from '../../redux/actions/expenses'

function TopFold() {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    const handleQuery = (e) => {
      setQuery(e.target.value) 
      dispatch(searchExpense(e.target.value))
      
    }
  return (
    <div>
        {window.location.pathname === '/' ?

        <div className="home_topfold">
            <div className="searchbar" >
                <input 
                  placeholder="Search For Expenses"
                  value = {query}
                  onChange={(e)=>handleQuery(e)}
                />
            </div>
            
            <div className="add_button">
               <Link to="/AddExpense">
                <button>Add</button>
                </Link>
            </div>
        </div>

      :  <div className="formPage_topfold">
          <Link to="/">
            <button className="backbtn">Back</button>
          </Link>
          <Link to="/">
            <button className="cancelbtn">Cancel</button>
          </Link>
        </div>
      
      }
    </div>
  )
}

export default TopFold