function bankReducer (state = {balance: 0}, action) {
  switch(action.type) {
    case "ADD_CUSTOMER":
        console.log("A", action, Object.values(action.payload))
        return {...state, balance: state.balance + Number(Object.values(action.payload)[0]['account'])}
    case "ADD_CASH":
        return {...state, balance: state.balance + Number(action.amount)}

  }
  return state;
}

export default bankReducer;
