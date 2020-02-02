import React from 'react';
import { combineReducers } from 'redux';


const reducers = combineReducers({
  test: (state = [1,2,4], action) => state
})

export default reducers;
