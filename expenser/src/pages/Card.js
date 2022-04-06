import React from 'react'
import './Card.css'
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {removeExpense} from '../redux/actions/expenses'
function Card({item}) {
  console.log(item)
  const time = moment(item.createdAt).fromNow()
  console.log(time)
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeExpense(item))
  
  }
  return (
    <div className="card" style = {{borderRight:`6px solid ${item.category.color}`}}>
       <div className="cardImageContainer">
         <div className="card-info">
            <h3>{item.title}</h3>
            <p>{time}</p>
         </div>
         <div className="right">
           <p>{`₹ ${item.amount}`}</p>
           <button onClick={handleDelete}>Delete</button>
         </div>
       </div>
    </div>
  )
}

export default Card