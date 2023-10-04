import React from 'react';
import style from './itemProject.module.css';
import Image from 'next/image';
import Link from 'next/link';
const ItemProject = (props) =>  {
    return(
        <div className={style.imgcontent}>
            <Link href="/proyectos" className={style.verTodos} >
                <Image
                    className={style.img}
                    src={props.src}
                    width="251"
                    height="350"
                />
            </Link>
            <h1 className={style.title}>{props.title}</h1>
        </div>
        
    )
}

export default ItemProject;