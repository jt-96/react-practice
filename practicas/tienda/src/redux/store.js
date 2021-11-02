import { applyMiddleware, combineReducers, createStore } from 'redux';
import carritoReducer from './carrito/reducer';
import catalogoReducer from './catalogo/reducer';
import userReducer from './user/reducer';
import { logger } from 'redux-logger'

const rootReducer = combineReducers({
    carrito: carritoReducer,
    catalogo: catalogoReducer,
    user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;