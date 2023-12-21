import { legacy_createStore as createStore } from 'redux';
import ShopReducer from './reducers/ShopReducer';

const store = createStore(ShopReducer);

export default store;
