import { connect } from 'react-redux'

const Boton = (props) => {
    return (
        <button onClick={props.incrementar}>Incrementar</button>
    )
}

// mapState => Lecturas
// mapDispatch => Escrituras
const mapDispatch = (dispatch) => ({
    incrementar: () => dispatch({ type: 'incrementar' })
})
const adaptadorRedux = connect(null, mapDispatch);

export default adaptadorRedux(Boton);