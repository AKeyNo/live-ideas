import * as types from '../constants/types';

// ADD ITEM TO SHOPPING CART
export const addToShoppingCart = (item) => {
  return { type: types.ADDTOCART, payload: { item } };
};
