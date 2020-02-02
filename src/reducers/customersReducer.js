const customerReducers = (state = [], action) => {
    switch(action.type){
        case "ADD_CUSTOMER":
            return [...state, action.payload]
    }
    return state
}
export default customerReducers;
