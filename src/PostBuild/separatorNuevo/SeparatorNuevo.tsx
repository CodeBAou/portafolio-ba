import React,{useState}from 'react';
import Style from './Style.module.css';

import Image from 'next/image';

interface propsSeparatorI {
    fn : ( type:number, order:number) => void
    order:number
    
}

const SeparatorNuevo= (props:propsSeparatorI ) => {

  
    
    return(
        <div  className={Style.content} onClick={() => props.fn(1,props.order)}>
            <span className={Style.mas}>+</span>
        </div> 
    )
}

export default SeparatorNuevo;