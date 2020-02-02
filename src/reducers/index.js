import React from 'react';
import { combineReducers } from 'redux';
import customersReducer from "./customersReducer";
import bankReducer from "./bankReducer"


const reducers = combineReducers({
  test: (state = [1,2,4], action) => state,
  bank: bankReducer,
  customers: customersReducer
})

export default reducers;
