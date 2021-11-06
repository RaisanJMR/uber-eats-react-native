import { combineReducers } from 'redux'

import CartReducer from './CartReducers'

let reducers = combineReducers({
  cart: CartReducer,
})
const rootReducer = (state, action) => {
  return reducers(state, action)
}
export default rootReducer
 