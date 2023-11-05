import React from 'react';
import style from './itemProject.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface ItemProjectI{
    id:string;
    src:string;
    title:string;
}

const ItemProject = (props:ItemProjectI) =>  {
    
    const getImage = () => {
        if(props.id != undefined){
            return <>
                 <Link href={`/post/${props.id}`} className={style.imgcontenta}>
                    <img className={style.img} src={props.src} width="251" height="350"  alt="miniatura del proyecto" />
                </Link>
                <h1 className={style.title}>{props.title}</h1>
            </>
        }
    }

    return(
        <div className={style.imgcontent}>
            {getImage()}
        </div>
        
    )
}

export default ItemProject;