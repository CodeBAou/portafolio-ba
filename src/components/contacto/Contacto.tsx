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
    let emailOpen : boolean = false;

    return(
        <section className={ContactoStyle.content}>
            
            <div className={ContactoStyle.contentSecond}>

              
                <Image
                    fill
                    className={ContactoStyle.github}
                    src="/github.svg"
                    alt="Link repository of the author"
                    sizes="(min-width: 1200px) 50px, (max-width: 1200px) 100px, 100px "
                />
                
                <Image
                    fill
                    className={ContactoStyle.email}
                    src="/email.svg"
                    alt="Link socialnetwork of the author"
                    sizes="(min-width: 1200px) 50px, (max-width: 1200px) 100px , 100px"
                    onClick= {() => {
                        if(emailOpen){
                            setcopyemailclass(ContactoStyle.copyEmailContent);
                            emailOpen = false;
                        }else{
                            setcopyemailclass(ContactoStyle.copyInit);
                            emailOpen = true;
                        }
                    }}
                />
                
                <div className={copyemailclass}>
                    <input type="text" className={ContactoStyle.copyInput} value="borisafou@gmail.com"/>
                    <input type="button" className={ContactoStyle.copyBtn} value="X" onClick={ () => {
                          if(emailOpen){
                            setcopyemailclass(ContactoStyle.copyEmailContent);
                            emailOpen = false;
                        }else{
                            setcopyemailclass(ContactoStyle.copyInit);
                            emailOpen = true;
                        }
                    }}/>
                </div>

                <Image
                    fill
                    className={ContactoStyle.linkedin}
                    src="/linkedin.svg"
                    alt="Link socialnetwork of the author"
                    sizes="(min-width: 1200px) 50px, (max-width: 1200px) 100px , 100px"
                    onClick = { () => {
                      
                        
                    }}
                />
               
            </div>
            
         
    </section>
    )
}