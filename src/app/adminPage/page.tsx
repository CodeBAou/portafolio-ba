"use client"
import React ,{useState} from 'react';
import Style from './style.module.css';
import OneTab from '../../components/google0Auth/onetab';
import {useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

const adminPage = () => {

  const { data: session } = useSession()
   console.log(session);

    if (session && session.user ) { //El usuario existe se muestra la pagina
        return (
          
                <div className={Style.privateContent}>
                    <div className={Style.header}>

                        <span className={Style.title}>CodeBaou Private</span>

                        <div className={Style.tools}></div>

                        <div className={Style.userContent}>
                            <span className={Style.username}> Hola {session.user.name} </span>
                            <button className={Style.btnsalir} onClick={() => signOut()}>Salir</button> 
                        </div>
                    </div>
                </div>
        )
    }
    
    return (
        <div className={Style.contentLogin}>

            {/** Debe Iniciar Sesion */}

            <div className={Style.panelLogin}>

                <h1 className={Style.tlogin}>Iniciar Sesion </h1>

                <Image
                    src="/google.svg"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    onClick={() => signIn()}
                    className={Style.img}
                />  
            </div>

        </div>
    )
}

export default adminPage;