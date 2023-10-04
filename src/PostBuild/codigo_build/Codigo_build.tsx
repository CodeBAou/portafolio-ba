import React, {useState} from 'react';
import Style from './Style.module.css';
import Image from 'next/image';

interface sectionCodigo_build{
    id:string;
    text:string;
    order:number;
    Delete:(id:string) => void;
    Update:(id:string,text:string) => void;
}

const Codigo_build = (props:sectionCodigo_build) => {

    return(
        <div className={Style.content}>
            <div className={Style.contentBTN}>
                <Image 
                    className={Style.del}
                    src='./delete.svg'
                    width={30}
                    height={30}
                    alt="icon elimianr titulo"
                    onClick={ () => props.Delete(props.id)}
                />
            </div>
           <textarea className={Style.textarea} placeholder="Escribe aqui tu código" onChange={(e) => props.Update( props.id, e.currentTarget.value )}>{}</textarea>
        </div>
    )
}

export default Codigo_build;