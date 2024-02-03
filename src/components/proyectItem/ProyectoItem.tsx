import React from 'react';
import { redirect } from 'next/navigation'
import Style from './ProyectoItem.module.css';
import { useRouter } from 'next/navigation'

interface ProyectoItemPropsI{
    id:string;
    titulo:string;
    miniatura:string;
    date:string;
    desc:string;
}

const ProyectoItem = (props:ProyectoItemPropsI) => {

    const router = useRouter()

    return(
        <div className={Style.content} onClick={ (e) => {   
            e.stopPropagation(); 
            console.log(` ${props.id}`);
            //redirect(`/post/${props.id}`);
            router.push(`/post/${props.id}`)
        } }>
            <div className={Style.item}>
                <img className={Style.img} src={props.miniatura} alt="miniatura del post"/>
                <div className={Style.textContent}>
                    <span className={Style.date}> {props.date}</span>
                    <h2 className={Style.titulo}>{props.titulo}</h2>
                    <p className={Style.desc}>{props.desc}</p>
                    <span className={Style.puntosDecoracion}>...</span>
                </div>
            </div>
        </div>
    )
}

export default ProyectoItem;