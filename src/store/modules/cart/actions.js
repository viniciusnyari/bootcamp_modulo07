// Essa será utilizada pelo Saga
export function addToCardRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

// Essa será utilizada pelo reducer
export function addToCardSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@Cart/REMOVE',
    id,
  };
}

// Essa será utilizada pelo Saga
export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

// Essa será utilizada pelo reducer
export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
