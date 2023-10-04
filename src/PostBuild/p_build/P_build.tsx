import React,{useState} from 'react';
import Style from './Style.module.css';
import Image from 'next/image';

interface sectionp_build{
    id:string;
    order:number;
    text:string;
    Delete:(id:string) => void;
    Update: (id:string,value:string)=> void ;
}

const P_build = (props:sectionp_build) => {

    const [value, setValue] = useState("");
    const [secondID, setSecondID ] = useState( );

    const autoajustar = (ev:React.DragEvent<HTMLDivElement>) => {
        ev.currentTarget.style.height = 'auto'; // Restaurar la altura a automática
        ev.currentTarget.style.height = (ev.currentTarget.scrollHeight + 2) + 'px'; // Ajustar al contenido + 2 píxeles
    }

    return(
        <div className={Style.content}>
            <div className={Style.contentBTN}>
                <Image 
                    className={Style.del}
                    src='./delete.svg'
                    width={30}
                    height={30}
                    alt="icon elimianr titulo"
                    onClick={ () => props.Delete( props.id )}
                />
            </div>
            
            <textarea id="miTextarea" onInput={ () => autoajustar } className={Style.p_postBuild} onChange={(e) => props.Update( props.id, e.currentTarget.value )} placeholder="texto de parrafo">{props.text}</textarea>
        </div>
    )
}

export default P_build;