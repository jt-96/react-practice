const carritoState = {
    items: [
        // {id: 1, cantidad: 2}
    ],
}

function carritoReducer(prevState = carritoState, action) {

    switch (action.type) {
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

            console.log("carritoReducer Nuevos items", nuevosItems);
            return {
                ...prevState,
                items: nuevosItems
            }
        default:
            return prevState;
    }
}

export default carritoReducer