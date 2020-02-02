import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import AddCash from "./AddCash"

const Customer = ({customer}) => {

  return (
    <article className="col-4">
      <h2>{customer.name} {customer.surname}</h2>
      <p>PESEL: {customer.PESEL}</p>
      <p>Stan konta: {customer.account}</p>
      <p>Stan lokaty: {customer.deposit}</p>
      <p>Stan kredytu: {customer.credit}</p>
     <AddCash/>
    </article>
  )
}

export default Customer;