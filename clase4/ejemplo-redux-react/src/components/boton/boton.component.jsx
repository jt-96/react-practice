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
const conector = connect(null, mapDispatch);

export default conector(Boton);