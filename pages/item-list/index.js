import { useSelector } from 'react-redux';
import Link from 'next/link';
import { ShoppingCart } from '../../components/cart/ShoppingCart';
import { ItemList } from '../../components/itemList/ItemList';

const Cart = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <ItemList />
      <Link href='/cart'>
        <a>Go to cart</a>
      </Link>
    </>
  );
};

export default Cart;
