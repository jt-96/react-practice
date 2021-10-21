import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import SearchBox from './components/search-box/search-box.component'; UNUSED
import Item from './components/item/item.component'
import AppMenu from './components/app-menu/app-menu.component'
import { connect } from 'react-redux'

function App(props) {

  return (
    <div>
      <AppMenu />
      <Container fixed>
        <Grid container style={{ marginTop: "10px", padding: "10px" }} spacing={3}>
          {props.items.map((item, index) => (
            <Grid key={index} item xs={12}>
              <Item item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}


const adaptadorRedux = connect(function (state) {
  return {
    items: state.catalogo.filtered ? state.catalogo.filtered : state.catalogo.source,
    filtered: state.catalogo.source,
  }
});

export default adaptadorRedux(App);
