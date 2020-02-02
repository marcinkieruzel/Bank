import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const defaultFormData = {
  name: "",
  surname: "",
  PESEL: "",
  account: "",
  deposit: "",
  credit: ""
}

const Bank = () => {
  const bank = useSelector(state => state.bank)
  const [formData, setFormData] = useState (
    defaultFormData
  )
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: "ADD_CUSTOMER", payload: {[formData.PESEL]: formData}})
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.currentTarget.id] : e.currentTarget.value
    })
  }
  return (
    <div>
    <h1>Bank Redux S.A.</h1>
      <div className="panel">
        <ul>
          <li>Stan konta banku: {bank.balance}</li>
        </ul>
      </div>
      <h2>Dodaj klienta</h2>
      <form onSubmit={handleSubmit} action="">
        <div className="form-group">
          <label htmlFor="name">Imię</label>
          <input type="text" className="form-control" onChange={handleChange} id="name" value={formData.name} />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Nazwisko</label>
          <input type="text" className="form-control" onChange={handleChange} id="surname" value={formData.surname} />
        </div>
        <div className="form-group">
          <label htmlFor="PESEL">PESEL</label>
          <input type="number" className="form-control" onChange={handleChange} id="PESEL" value={formData.PESEL}/>
        </div>
        <div className="form-group">
          <label htmlFor="account">Stan konta</label>
          <input type="number" className="form-control" onChange={handleChange} id="account" value={formData.account}/>
        </div>
        <div className="form-group">
          <label htmlFor="deposit">Stan lokaty</label>
          <input type="number" className="form-control" onChange={handleChange} id="deposit" value={formData.deposit}/>
        </div>
        <div className="form-group">
          <label htmlFor="credit">Stan kredytu</label>
          <input type="number" className="form-control" onChange={handleChange} id="credit" value={formData.credit}/>
        </div>
        <button className="btn btn-primary">Dodaj</button>
      </form>
    </div>
  )
}

export default Bank;
