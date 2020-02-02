const customerReducers = (state = {}, action) => {
    switch(action.type){
        case "ADD_CUSTOMER":
            return {...state, ...action.payload}
        case "ADD_CASH":

          return {...state, [action.pesel]: {...state[action.pesel], account: Number(state[action.pesel].account) + Number(action.amount)}}
    }
    return state
}
export default customerReducers;
