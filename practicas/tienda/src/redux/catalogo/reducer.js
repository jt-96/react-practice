const catalogoState = {
    source: [
        { id: 1, nombre: "Pantalla", descripcion: "Lorem", foto: "img/screen.jpg", precio: "21000" },
        { id: 2, nombre: "Celular", descripcion: "Lorem", foto: "img/cellphone.jpg", precio: "12000" },
        { id: 3, nombre: "Mouse", descripcion: "Lorem", foto: "img/mouse.jpg", precio: "3000" },
        { id: 4, nombre: "Teclado", descripcion: "Lorem", foto: "img/keyboard.jpg", precio: "4000" }
    ]
};

function catalogoReducer(prevState = catalogoState, action) {
    switch (action.type) {

        /* case 'catalogo/SEARCH':
            const search = action.search;
            const srcItems = prevState.source;
            const filteredItems = srcItems.filter((val) => val.nombre.toLowerCase().includes(search.toLowerCase()));

            // Toma el prevState y le aplica los cambios del filtered (filteredItems)
            return {
                ...prevState,
                filtered: filteredItems
            } */
        default:
            return prevState;
    }
}

export default catalogoReducer