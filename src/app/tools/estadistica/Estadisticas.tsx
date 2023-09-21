import React, {useState} from 'react';
import Style from './Style.module.css';

interface dataTypes {
    totalPages:string;
}

const Estadistica = (props:dataTypes) => {
    return(
        <div className={Style.content}>
            <span className={Style.data}>{` Total Posts: ${props.totalPages}`}</span>
        </div>
    ) 
}

export default Estadistica;