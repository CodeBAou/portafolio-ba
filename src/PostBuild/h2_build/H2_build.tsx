import React, {useState,useEffect} from 'react';
import Style from './Style.module.css';
import Image from 'next/image';

interface sectionH2_build{
    id:string;
    text:string;
    order:number;
    Delete:(id:string) => void;
    Update:(id:string,text:string) => void;
}

const H2_build = (props:sectionH2_build) => {
   
    return(
        <div className={Style.content}>

            <input type="text"  className={Style.h2_postBuild} placeholder="Titulo de seccion" onChange={(e) => props.Update( props.id, e.currentTarget.value )}/>
           
            <Image 
                className={Style.del}
                src='./delete.svg'
                width={30}
                height={30}
                alt="icon elimianr titulo"
                onClick={ () => props.Delete( props.id )}
            />

        </div>
    )
}

export default H2_build;