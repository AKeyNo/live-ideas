import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { startClock } from '../src/utils/actions';

const Index = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Link href='/item-list'>
        <a>Click to see the item list</a>
      </Link>
      <br />
      <Link href='/cart'>
        <a>Click to see the cart</a>
      </Link>
      <br />
      <Link href='/show-redux-state'>
        <a>Click to see current Redux State</a>
      </Link>
    </>
  );
};

export default Index;
