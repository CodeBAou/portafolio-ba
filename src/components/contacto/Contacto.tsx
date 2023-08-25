"use client"
import React,{useState} from 'react';
import Image from 'next/image';
import ContactoStyle from './contacto.module.css';

interface data{
    github:string,
    linkedin:string,
    email:string
}
export default function Contacto(props:data){

    const [copyemailclass, setcopyemailclass] = useState( ContactoStyle.emailInit );
    let emailOpen : boolean = false;

    return(
        <section className={ContactoStyle.content}>
            
            <div className={ContactoStyle.contentSecond}>
                <a href={props.github} target="_blank">
                    <Image
                        className={ContactoStyle.github}
                        src="/github.svg"
                        width={500}
                        height={500}
                        alt="Link repository of the author"
                    />
                </a>
                
                <a href={props.linkedin} target="_blank">
                    <Image
                        className={ContactoStyle.linkedin}
                        src="/linkedin.svg"
                        width={500}
                        height={500}
                        alt="Link socialnetwork of the author"
                    />
                </a>
                
                <Image
                    className={ContactoStyle.email}
                    src="/email.svg"
                    width={500}
                    height={500}
                    alt="email of the author"
                    onClick= {() => {
                        setcopyemailclass(ContactoStyle.emailOpen);
                        console.log("click");
                    }}
                />
                
            </div>
            
            <div className={copyemailclass}>
                    <input type="text" className={ContactoStyle.input} defaultValue={props.email}/>
                    <button className={ContactoStyle.btn} onClick={ () => {
                        setcopyemailclass(ContactoStyle.emailClose);
                        console.log("click");
                    }}>X</button>
            </div>

    </section>
    )
}