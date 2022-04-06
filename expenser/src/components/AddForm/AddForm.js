import React, { useState } from 'react';
import { categories } from '../constants/add-expense';
import {useDispatch} from "react-redux";
import { addExpense } from '../../redux/actions/expenses';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddForm.css';
import { Link } from 'react-router-dom';

function AddForm() {
    const categ = categories;
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [categoryOpen , setCategoryOpen] = useState(false)
    const [category, setCategory] = useState()

   const dispatch = useDispatch()


    const handleTitle = (e)=>{
        setTitle(e.target.value)
    }
    const handleAmount = (e)=>{
        const val = parseFloat(e.target.value)
        if(isNaN(val)){
            setAmount('')
            return
        }
        setAmount(val)
    }

    const handleCategory = (category) =>{
       setCategory(category)
       setCategoryOpen(false)
    }  

    const handleSubmit = () => {
        if (title === "" || amount === "" || !category) {
          const notify = () => toast("Please enter complete data");
          notify();
          return;
        } 
        const data = {
          title,
          amount,
          category,
          createdAt: new Date(),
        }
  
        dispatch(addExpense(data));  
      };

  return (
    <div className="add_form">
        <ToastContainer
           position="bottom-left"
           autoClose={1500}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
          
        />
        <div className="form_item">
            <label>Title</label>
            <input 
            placeholder="Title for the Expenditure"
            value={title}
            onChange={(e)=> handleTitle(e)} />   
        </div>
        <div className="form_item">
           <label>Amount ₹</label>
            <input 
            className="amount_input"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e)=>handleAmount(e)} />   
        </div>

        <div className="category_container">
            <div className="category">
                <div className="category-dropdown" onClick={()=>setCategoryOpen(!categoryOpen)}>
                    <label>{category ? category.title : "Category"}</label>
                </div>
                {categoryOpen &&(
                     <div className="cat-container">
                    {categ.map((category) => (
                        <div className="category-item" 
                            key={category.id}
                            onClick={()=>handleCategory(category)}>
                          
                          <label>{category.title}</label>
                        </div>
                    ))}
                    </div>
                    )}
            </div>
        </div>
        <div className = 'form-add-btn'>
           <Link to="/"> <button onClick={handleSubmit}>Add</button></Link>
        </div>
    </div>
  )
}

export default AddForm