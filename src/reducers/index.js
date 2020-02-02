import React from 'react';
import { combineReducers } from 'redux';
import customersReducer from "./customersReducer";


const reducers = combineReducers({
  test: (state = [1,2,4], action) => state,
  customers: customersReducer
})

export default reducers;
