import { createStore } from 'redux'

const store = createStore(function (prevState = { numero: 1 }, action) {
    console.log('Cambiando el estado', arguments);
    if (action.type === 'incrementar') {
        return {
            numero: prevState.numero + 1
        }
    } else {
        return prevState
    }
});

export default store;