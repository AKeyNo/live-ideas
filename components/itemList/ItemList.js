import { useSelector, useDispatch } from 'react-redux';
import { addToShoppingCart } from '../../src/utils/actions';

export const ItemList = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const LISTOFITEMS = [
    {
      id: 0,
      name: 'Apple',
      description: 'This is a food.',
      price: '$1.00',
      image: 'http://www.imagelink.com/',
      quantity: 1,
    },
    {
      id: 1,
      name: 'Blue Shirt',
      description: 'Very nice shirt.',
      price: '$20.00',
      image: 'http://www.shirt.com/',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Controller',
      description: 'This is for the TV',
      price: '$5.00',
      image: 'http://www.tv.com/',
      quantity: 1,
    },
  ];

  return (
    <div className={'item-list'} data-cy='item-list'>
      <h1>
        <u>Items to Buy</u>
      </h1>
      <ul>
        {LISTOFITEMS.map((item) => {
          return (
            <li key={item.id}>
              {item.name}, {item.description}, {item.price}
              <button onClick={() => dispatch(addToShoppingCart(item))}>
                Add Item
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
