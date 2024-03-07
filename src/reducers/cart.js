export const cartInitialState = []

export const cartReducer = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case 'ADD_TO_CART': {
      const {id} = payload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        // clonar el array origial. No se debe modificar el original
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

    // Si no está en el carrito
      return [
        ...state,
        {
          ...payload,
          quantity: 1
        }
      ]
    }

    case 'REMOVE_FROM_CART': {
      const {id} = payload
      return state.filter(item => item.id !== id)
    }

    case 'CLEAR_CART': {
      return cartInitialState
    }
  }
  return state
}