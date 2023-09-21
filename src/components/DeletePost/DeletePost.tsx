import React from 'react';
import Image from 'next/image';
import Style from './Style.module.css';
import Url_config from '../../Url_config';

interface propsDeletePost{
    idPost:string,
    postsFN:(a:[]) =>  void;
    token:string;
}

const DeletePost = (props:propsDeletePost) => {
    
    const url = new Url_config();
    
    const httpDeletePost = () => {
        console.log("token -> fetch "+ props.token);
        fetch( url.route_delete(props.idPost),{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':props.token
            } 
        }).then( res => {
            props.postsFN([]);
        }).catch(err => console.log(err));

    } 

    return(
        <Image
            src='./delete.svg'
            alt="icon delete"
            width={18} 
            height={18} 
            className = {Style.icon}
            onClick={ () => { 
                if (confirm("Esta seguro que desea eliminar el post ?") == true) {
                    httpDeletePost(); 
                }      
            } }
        />
    )
}

export default DeletePost;