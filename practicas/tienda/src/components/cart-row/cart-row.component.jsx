import '../cart-row/cart-row.styles.css';
import Grid from '@mui/material/Grid';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { connect } from 'react-redux'


function CartRow(props) {
    return (
        <Grid container className="cart-row">
            <Grid item xs={2} className="cart-row-cell">
                <img src={props.item.foto} alt="" width="150" height="150" />
            </Grid>
            <Grid item xs={2} className="cart-row-cell">{props.item.nombre}</Grid>
            <Grid item xs={2} className="cart-row-cell">
                <span><ArrowBackIosNewOutlinedIcon className="cart-row-button" onClick={() => props.sub()} /></span>
                <span className="cart-row-count">{props.item.cantidad}</span>
                <span><ArrowForwardIosOutlinedIcon className="cart-row-button" onClick={() => props.add()} /></span>
            </Grid>
            <Grid item xs={2} className="cart-row-cell">
                <span className="cart-row-inner-text">Precio Unitario:</span>
                <span className="cart-row-price">{props.item.precio}</span>
            </Grid>
            <Grid item xs={2} className="cart-row-cell">
                <span className="cart-row-inner-text">Total</span>
                <span className="cart-row-price">{props.item.total}</span>
            </Grid>
            <Grid item xs={2} className="cart-row-cell">
                <CloseOutlinedIcon className="cart-row-button" onClick={() => props.del()} />
            </Grid>
        </Grid>
    )
}

const mapDispatch = (dispatch, prevProps) => {

    const prevCant = prevProps.item.cantidad;
    return {

        add: () => dispatch({
            type: 'carrito/EDITAR_ITEM',
            item: {
                ...prevProps.item,
                cantidad: prevCant + 1
            }
        }),
        sub: () => dispatch({
            type: 'carrito/EDITAR_ITEM',
            item: {
                ...prevProps.item,
                cantidad: prevCant - 1
            }
        }),
        del: () => dispatch({ type: 'carrito/BORRAR_ITEM', item: prevProps.item })
    }
}

const conector = connect(null, mapDispatch);
export default conector(CartRow);