const { FETCH_PRODUCTS } = require("../types");

//when we get new data inside actions we update state inside store here.
export const productsReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_PRODUCTS:
            return{
                items: action.payload
            }
            default:
                return state
    }
} 