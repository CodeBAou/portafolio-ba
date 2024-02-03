import React from 'react';
import Image from 'next/image';
import Style from './EditPost.module.css';
import { useRouter } from 'next/router';

interface EditPostI{
    id:string
}

function EditPost(props:EditPostI){
    
    const router = useRouter();

    const redirectEditPost = ( ) => {
        router.push('/dashboard');
    }

    return(
        <Image
            src='./editar.svg'
            alt="icon editar"
            width={18} 
            height={18} 
            className={Style.icon}
            onClick={ () => {
                redirectEditPost();
            }}
        />
    )
}

export default EditPost;