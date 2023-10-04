import React, {useState,useEffect} from 'react';
import Style from './Style.module.css';
import H2_build from '../../PostBuild/h2_build/H2_build';

interface SectionEditable{
    post:string;
    type:number;
}

const SectionEditable = (props:SectionEditable) => {

    const [data,setData] = useState({
        id:"",
        post:"",
        parrafo:"",
        img:"",
        order:0,
        type:0
    });
    
    const getData = () => {
        return data;
    }

    /** 
     * Devuelve true si es valido y se puede guardar la seccion o 
     * false si falta algun dato importante para almacenar */
    const validate = () => {
        if(data.post != "" && data.post != undefined && data.post != null){
            return true;
        }
        return false;
    }

    //Seleccion el tipo de etiqueta html segun la prop type
    const getComponent = () => {
        switch( props.type ){
            case 1://Titulo
                return <h2 className = {Style.h2_section}> {data.parrafo} </h2>
                break;
            case 2://Parrafo
                return <p className = {Style.p_section}> {data.parrafo} </p>
                break;
            case 3://Imagen
                return <img src = {data.img} alt = "una imagen para el post" className = {Style.img_section} />
                break;
            case 4://Codigo
                return <code className = {Style.code_section}> {data.parrafo} </code>
                break;
        }
    }

    return(
        <div className={Style.content}>
           {getComponent()}
        </div>
    )
}

export default SectionEditable;