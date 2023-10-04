import React,{useState, useEffect} from 'react';
import Style from './Style.module.css';
import Image from 'next/image';

interface sectionIMG_build{
    id:string;
    img:string;
    order:number;
    Delete:(id:string) => void;
    Update:(id:string,text:string) => void;
}

const Imagen_build = ( props:sectionIMG_build ) => {

    const [value, setValue] = useState("");

    useEffect(() => {
        props.Update(props.id, value);
    },[value]);

    return(
        <div className={Style.content}>

            <div className={Style.contentBTN}>

                <input type="text" className={Style.enlace} placeholder="URL IMAGEN" onChange={(e) => setValue(e.currentTarget.value)}/>
                
                <Image 
                    className={Style.del}
                    src='./delete.svg'
                    width={30}
                    height={30}
                    alt="icon eliminar titulo"
                    onClick={ () => props.Delete(props.id)}
                />
            </div>
            
            <img src={value} alt="Imagen de post" className={Style.img} />
        </div>
    )
}

export default Imagen_build;