import * as types from '../constants/types';

// ADD ITEM TO SHOPPING CART
export const addToShoppingCart = (item) => {
  return { type: types.ADDTOCART, payload: { item } };
};

// REMOTE ITEM FROM SHOPPING CART
export const removeFromShoppingCart = (item) => {
  return { type: types.REMOVEFROMCART, payload: { item } };
};
