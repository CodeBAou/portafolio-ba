import React from 'react';
import Style from './buscador.module.css';

const Buscador = () => {
    return(
       <>
            <input className={Style.input} type="text" placeholder="Buscar"/>
            <input className={Style.btn} type="button" value="Buscar" />
       </>
    )
}

export default Buscador;