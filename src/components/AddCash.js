import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const AddCash = ({pesel}) =>{
    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch();

   const handleChange = (e) =>{
       setAmount(e.currentTarget.value)
   }

   const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch({type: "ADD_CASH", pesel: pesel, amount: amount})


   }

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
          <label htmlFor="name">Kwota</label>
          <input type="number" className="form-control" onChange={handleChange} id="name" value={amount} />
          </div>
          <button className="btn btn-info">Wpłać gotówkę</button>
        </form>
    )
}
export default AddCash
