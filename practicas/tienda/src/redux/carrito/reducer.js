const carritoState = {
    items: [
        // {id: 1, cantidad: 2}
    ],
}

function carritoReducer(prevState = carritoState, action) {

    switch (action.type) {
        case 'carrito/BORRAR_ITEM':
            return {
                ...prevState,
                items: prevState.items.filter((it) => it.id !== action.item.id),
            }

        case 'carrito/EDITAR_ITEM':
            return {
                ...prevState,
                items: prevState.items
                    .map((it) => (it.id === action.item.id ? action.item : it))
                    .filter((it) => it.cantidad > 0)
            }

        case 'carrito/AGREGAR_ITEM':
            const item = action.item;
            let nuevosItems = prevState.items;
            const finded = prevState.items.find(val => val.id === item.id);

            if (finded) {
                // Existente
                nuevosItems = nuevosItems.map(val => {
                    if (val.id === item.id) {
                        const prevCount = val.cantidad;
                        return {
                            id: item.id,
                            cantidad: prevCount + 1
                        }
                    } else {
                        return val;
                    }
                })
            } else {
                // No existe
                nuevosItems.push({
                    id: item.id,
                    cantidad: 1
                });
            }

            return {
                ...prevState,
                items: nuevosItems
            }
        default:
            return prevState;
    }
}

export default carritoReducer