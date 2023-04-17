export const LOGIN = "LOGIN"

const initialState = {
    userEmail : null,
    perishData : []
}



export  const Reducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOGIN:
            
            return {
                ...state,
                userEmail : action.payload
            }
    
        default:
            return state
    }
}