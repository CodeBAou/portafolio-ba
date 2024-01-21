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

    const [copyemailclass, setcopyemailclass] = useState( ContactoStyle.copyInit );
   
    /**Seleccion el estilo con tres clases predefinidas:
    *     emailCloseStart : Estilo al cargar la pagina 
    *     emailClose      : Activa la animacion para ocultar el correo
    *     emailOpen       : Activa la animacion para mostrar el correo
    */
   
    const [classAnimationEmail, setClassAnimationEmail] = useState(ContactoStyle.emailCloseStart);

    return(
        <section className={ContactoStyle.content}>
            
            <div className={ContactoStyle.contentSecond}>

            <a href={props.github} target="_blank">
                <Image
                    fill
                    className={ContactoStyle.github}
                    src="/github.svg"
                    alt="Link repository of the author"
                    sizes="(min-width: 1200px) 50px, (max-width: 1200px) 100px, 100px "
                />
            </a>
                <div className={ContactoStyle.emailContent}>

                    <Image
                        fill
                        className={ContactoStyle.email}
                        src="/email.svg"
                        alt="Link socialnetwork of the author"
                        sizes="(min-width: 1200px) 50px, (max-width: 1200px) 100px , 100px"
                        onClick= {() => {
                            setClassAnimationEmail(ContactoStyle.emailOpen);
                        }}
                    />
                    

                    <div className={classAnimationEmail}>
                        <input type="text" className={ContactoStyle.copyInput} value="borisafou@gmail.com"/>
                        <input type="button" className={ContactoStyle.copyBtn} value="X" onClick={ () => {
                            setClassAnimationEmail(ContactoStyle.emailClose);
                        }}/>
                    </div>

                </div>
               
                <a href={props.linkedin} target="_blank">
                    <Image
                        fill
                        className={ContactoStyle.linkedin}
                        src="/linkedin.svg"
                        alt="Link socialnetwork of the author"
                        sizes="(min-width: 1200px) 50px, (max-width: 1200px) 100px , 100px"
                        onClick = { () => {
                        
                            
                        }}
                    />
                </a>
               
            </div>
            
    </section>
    )
}