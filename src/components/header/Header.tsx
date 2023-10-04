import React from 'react';
import Image from 'next/image';
import StyleHeader from './header.module.css';

interface props{
    title:string,
    lw1:string,
    lw2:string,
    rw:string,
    image:string
}

export default function Header(props:props){

    const words = props.lw1.split(" ");
    return(
        <header className={StyleHeader.content}>

           <h1 className={StyleHeader.title1}>{props.title}</h1>

           <div className={StyleHeader.secondContent}>
            
                <div className={StyleHeader.contentLeft}>
                    <h2 className={StyleHeader.sub}>{words[0]} <span className={StyleHeader.wcolor}>{words[1]}</span></h2>
                    <h2 className={StyleHeader.sub}>{props.lw2}</h2>
                </div>

                <div className={StyleHeader.contentCenter}>
                    <Image
                        className={StyleHeader.authorIMG}
                        src={props.image}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>

                <div className={StyleHeader.contentRight}>
                    <h2 className={StyleHeader.sub2}>{props.rw}</h2>
                </div>

           </div>
        </header>
    )
}