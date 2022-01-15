import { useSelector, useDispatch } from 'react-redux';
import { addToShoppingCart } from '../../src/utils/actions';

export const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        <u>Shopping Cart</u>
      </h1>
      <ul>
        {cart.items.map((item) => {
          return (
            <li>
              {item.name}, {item.description}, {item.price}: Quantity:
              {item.quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
