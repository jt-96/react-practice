import { connect } from 'react-redux';

// Un componente React es una porcion de la interfaz en funcion de las props.
// El state de React permite implementar logica y procesos encapsulados en el componente.
// El state de Redux es todo el estado global de la aplicacion.

/* const Elemento = (props) => `
    <li>
        <a href="${props.link}">${props.nombre}</a>
    </li>
`
// Chance de reutilizar la interfaz
Elemento({ nombre: 'Item1', link: 'http://youtube.com' })
Elemento({ nombre: 'Item2', link: 'http://google.com' }) */


const Texto = (props) => {
    return (
        <div>{props.numeroActual ? props.numeroActual : 0}</div>
    )
}

// store.getState() ===> resultado (store.state)
const adaptarEstado = (estadoRedux) => {
    // Devuelve unas props
    return {
        numeroActual: estadoRedux.numero
    }
}

const adaptadorRedux = connect(adaptarEstado, null);

export default adaptadorRedux(Texto);