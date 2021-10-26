import { combineReducers, createStore } from 'redux'
import carritoReducer from './carrito/reducer';
import catalogoReducer from './catalogo/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
    carrito: carritoReducer,
    catalogo: catalogoReducer,
    user: userReducer
});

const store = createStore(rootReducer);

export default store;