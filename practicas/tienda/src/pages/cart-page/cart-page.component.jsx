import '../cart-page/cart-page.styles.css';
import { connect } from 'react-redux';
import { getCart } from '../../redux/carrito/getters';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CartRow from '../../components/cart-row/cart-row.component';

function CartPage(props) {

    //Titulo
    //Lista de Items
    //Boton Checkout
    const itemList = (
        <Container fixed>
            <h2>Carrito</h2>
            {props.items.map((it, index) => <CartRow key={index} item={it} />)}
            <Button variant="contained" onClick={() => props.history.push('/checkout')}>Checkout</Button>
        </Container >
    )

    const noItems = <h3>No tienes items en el carrito</h3>

    return (
        <Container fixed>
            {props.items.length > 0 ? itemList : noItems}
        </Container>
    )
}

const mapState = state => ({
    items: getCart(state),
})

export default connect(mapState)(CartPage)