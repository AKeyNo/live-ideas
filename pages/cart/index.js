import { useSelector } from 'react-redux';
import Link from 'next/link';
import { ShoppingCart } from '../../components/cart/ShoppingCart';

const Cart = () => {
  const state = useSelector((state) => state);

  return (
    <div className={'cart'}>
      <ShoppingCart />
      <Link href='/item-list'>
        <a>Go to items</a>
      </Link>
    </div>
  );
};

export default Cart;
