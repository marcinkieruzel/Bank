import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import Customer from "./Customer";

const CustomerList = () => {
  const customers = useSelector(state => state.customers);
  console.log(customers);

  useEffect(() => {
    console.log(customers);
  }, [customers])

  return <div className="row">
    {
      Object.values(customers).map((customer,i) => {
        return <Customer key={i} customer={customer} />
      })
    }
  </div>
}

export default CustomerList;
