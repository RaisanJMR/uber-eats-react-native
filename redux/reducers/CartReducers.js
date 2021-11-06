let defaultState = {
  selectedItems: {
    items: [],
    restaurantName: '',
  },
}

const CartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newState = { ...state }
      newState.selectedItems = {
        items: [...state.selectedItems.items, action.payload],
      }
      console.log(newState)
      return newState
    }
    default:
      return state
  }
}
export default CartReducer
