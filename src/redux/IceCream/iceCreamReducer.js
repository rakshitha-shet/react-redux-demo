import { BUY_ICE } from "./iceCreamType"

const initialState = {
    numOfIceCream : 40
}
export const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICE:
            return{
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default: return state
    }
}