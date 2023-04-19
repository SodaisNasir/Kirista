export const LOGIN = "LOGIN"
export const HIDE_ADVERTISEMENT = 'HIDE_ADVERTISEMENT'

const initialState = {
    userEmail : null,
    perishData : [],
    showAdvertisement : true
}



export  const Reducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOGIN:
            
            return {
                ...state,
                userEmail : action.payload
            }
            case HIDE_ADVERTISEMENT:
            
            return {
                ...state,
                showAdvertisement : action.payload
            }
        
            
        default:
            return state
    }
}