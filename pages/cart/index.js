import { useSelector } from 'react-redux';
import Link from 'next/link';
import { ShoppingCart } from '../../components/cart/ShoppingCart';

const Cart = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <ShoppingCart />
      <Link href='/itemList'>
        <a>Go to items</a>
      </Link>
    </>
  );
};

export default Cart;
