import { useSelector, useDispatch } from 'react-redux';
import { removeFromShoppingCart } from '../../src/utils/actions';

export const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div data-cy='cart'>
      <h1>
        <u>Shopping Cart</u>
      </h1>
      <ul>
        {cart.items.map((item) => {
          return (
            <li key={item.id}>
              {item.name}, {item.description}, {item.price}: Quantity:
              {item.quantity}
              <button onClick={() => dispatch(removeFromShoppingCart(item))}>
                |Remove Item From Cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
