import { INCREMENT, DECREMENT, RESET } from '../constants/types';

// COUNTER REDUCER
export default (state = 0, { type }) => {
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};
