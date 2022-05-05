import { ADDTOCART, REMOVEFROMCART, RESETCART } from '../constants/types';

const initState = { items: [] };

// item id, name of the item, description, price, image, quantity

// CART REDUCER
export default (state = initState, action) => {
  switch (action.type) {
    // ADD ITEM TO CART
    case ADDTOCART:
      let addedItem = action.payload.item;
      let isItemInCartAlready = false;

      let ATC_itemList = state.items;
      for (let item of ATC_itemList) {
        if (item.id === addedItem.id) {
          item.quantity += 1;
          isItemInCartAlready = true;
          break;
        }
      }

      if (isItemInCartAlready) {
        return { items: ATC_itemList };
      } else {
        ATC_itemList.push(addedItem);
        return { items: ATC_itemList };
      }
    case REMOVEFROMCART:
      let itemToDelete = action.payload.item;
      let RFC_itemList = state.items;

      RFC_itemList = RFC_itemList.filter((item) => item.id !== itemToDelete.id);

      return { items: RFC_itemList };
    case RESETCART:
      return { items: [] };
    default:
      return state;
  }
};
