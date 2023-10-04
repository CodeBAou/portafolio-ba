import React from 'react';
import Style from './ProyectoItem.module.css';

interface ProyectoItemPropsI{
    id:string;
    titulo:string;
    miniatura:string;
    date:string;
    desc:string;
    open:(id:string) => void;
}

const ProyectoItem = (props:ProyectoItemPropsI) => {
    return(
        <div className={Style.content} onClick={ () => props.open(props.id)}>
            <div className={Style.item}>
                <img className={Style.img} src={props.miniatura} alt="miniatura del post"/>
                <div className={Style.textContent}>
                    <span className={Style.date}> {props.date}</span>
                    <h2 className={Style.titulo}>{props.titulo}</h2>
                    <p className={Style.desc}>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ProyectoItem;