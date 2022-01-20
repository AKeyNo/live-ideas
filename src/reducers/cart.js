import { ADDTOCART, REMOVEFROMCART, RESETCART } from '../constants/types';

const initState = { items: [] };

// item id, name of the item, description, price, image, quantity

// CART REDUCER
export default (state = initState, action) => {
  switch (action.type) {
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
      let isItemQuantityRemovedAlready = false;

      let RFC_itemList = state.items;
      for (let item of RFC_itemList) {
        if (item.id === itemToDelete) {
          item.quantity =
            item.quantity >= itemToDelete.quantity
              ? item.quantity - itemToDelete.quantity
              : 0;
          isItemQuantityRemovedAlready = true;
          break;
        }
      }

      return { items: RFC_itemList };
    case RESETCART:
      return { items: [] };
    default:
      return state;
  }
};
