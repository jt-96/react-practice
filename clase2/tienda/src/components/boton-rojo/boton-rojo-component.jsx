import './boton-rojo.styles.css'

import { useState } from 'react';

/* function BotonRojo(props){

    const [colorFondo, setColorDeFondo] = useState('red');

    const cambiarEstado = () => {
        if(colorFondo === ""){
            setColorDeFondo('green');
        } else {
            setColorDeFondo('');
        }
    }

    return (
        <button style={{backgroundColor: colorFondo}} onClick={cambiarEstado}>{props.texto}</button>
    );
} */

//Eligiendo otro elemento como componente reactivo.
function BotonRojo(props){

    const [pressed, setPressed] = useState(false);

    const cambiarEstado = () => {
        setPressed(!pressed)
    }

    let boton = <button onClick={cambiarEstado}>{props.texto}</button>
    
    if(pressed) {
        boton = (
            <button style={{backgroundColor: 'green'}} onClick={cambiarEstado}>{props.texto}</button>
        )
    }

    return boton;
}

export default BotonRojo;