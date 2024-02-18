
import React from 'react';
import Style from './style.module.css';
import Image from 'next/image';
import DeletePost from '../DeletePost/DeletePost';
import { useRouter } from 'next/navigation';

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

    const router = useRouter();

    return(
        <tr className={Style.tr}>
            <td className={Style.id}>{props.id}</td>
            <td className={Style.titulo}>{props.titulo}</td>
            <td className={Style.descripcion}>{props.desc}</td>
            <td className={Style.data}>{props.data}</td>
            <td className={Style.tags}>{props.tags}</td>
            <td className={Style.iconTable}> 
                <Image
                    src='./eye.svg'
                    alt="icon ver"
                    width={20} 
                    height={20} 
                    className={Style.icon}
                    onClick={ () => {
                        router.push(`/post/${props.id}`);
                    }}
                />
            </td>
            <td className={Style.iconTable}>
                <Image
                    src='./editar.svg'
                    alt="icon editar"
                    width={18} 
                    height={18} 
                    className={Style.icon}
                    onClick={ () => {
                        router.push(`/editar/${props.id}/${props.token}`);
                    }}
                />
            </td>
            <td className={Style.iconTable}>
                <DeletePost idPost={props.id} postsFN={ props.postsFN } token={props.token}/>
            </td>
        </tr>
    )
}

export default StatusPostItemList;