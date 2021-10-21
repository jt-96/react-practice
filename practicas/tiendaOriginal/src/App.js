import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import SearchBox from './components/search-box/search-box.component'; UNUSED
import Item from './components/item/item.component'
import AppMenu from './components/app-menu/app-menu.component'
import { useState } from 'react'


function App() {

  const itemsIniciales = [
    { id: 1, nombre: "Pantalla", descripcion: "Lorem", foto: "img/screen.jpg" },
    { id: 2, nombre: "Celular", descripcion: "Lorem", foto: "img/cellphone.jpg" },
    { id: 3, nombre: "Mouse", descripcion: "Lorem", foto: "img/mouse.jpg" },
    { id: 4, nombre: "Teclado", descripcion: "Lorem", foto: "img/keyboard.jpg" }
  ]

  const [items, setItems] = useState(itemsIniciales);

  const onSearch = textoBusqueda => {

    const nuevosItems = itemsIniciales.filter((val) => val.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()));

    setItems(nuevosItems);
  }

  return (
    <div>
      <AppMenu onSearch={onSearch} />
      <Container fixed>
        <Grid container style={{ marginTop: "10px", padding: "10px" }} spacing={3}>
          {items.map((item, index) => (
            <Grid key={index} item xs={12}>
              <Item item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
