import { combineReducers } from 'redux';

import counter from './reducers/counter';
import timer from './reducers/timer';

export default combineReducers({ counter, timer });
