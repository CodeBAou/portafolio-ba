import React from 'react';
import Style from './style.module.css';
import Image from 'next/image';
import DeletePost from '../DeletePost/DeletePost';

/** Este componente representa un fila de datos de un post para listar dentro del  componente <ListPost/> */
interface dataItemPostListTYPE{
   id:string,
   titulo:string,
   data:string,
   desc:string,
   tags:string,
   postsFN: ( a:[] ) => void;
   token:string;
}

const StatusPostItemList = (props:dataItemPostListTYPE) => {
    return(
        <div className={Style.content}>

            <span className={Style.id}>{props.id}</span> 
            <span className={Style.nombre}>{props.titulo}</span> 
            <span className={Style.desc}>{props.desc}</span>
            <span className={Style.data}>{props.data}</span> 
            <span className={Style.data}>{props.tags}</span>

            <Image
                src='./eye.svg'
                alt="icon ver"
                width={20} 
                height={20} 
                className={Style.icon}
            />

            <Image
                src='./editar.svg'
                alt="icon editar"
                width={18} 
                height={18} 
                className={Style.icon}
            />

            <DeletePost idPost={props.id} postsFN={ props.postsFN } token={props.token}/>
        </div>
    )
}

export default StatusPostItemList;