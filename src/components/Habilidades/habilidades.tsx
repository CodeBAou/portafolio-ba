import React,{ useState,useEffect} from 'react';
import Style from './habilidades.module.css';
import Image from 'next/image';

interface data {
    datos:{
        src:string,
        href:string,
        alt:string,
        color:string
    }[]
}

const Habilidades = (props:data) =>  {
    let i = 0;
    let habilidades = props.datos.map((item) => {
        if(item.color == ''){
            return <a key={i} href={item.href} target="_blank"><img src={item.src} alt={item.alt} className={Style.img}/></a>
        }else{
            return <a key={i} href={item.href} target="_blank"><img src={item.src} alt={item.alt} className={Style.imgWhite}/></a>
        }
        
        i++;
    });
    
    
    return (
        <div className={Style.content}>
            <div className={Style.seconContent}>
                {habilidades}
            </div>
        </div>
    )
}

export default Habilidades;