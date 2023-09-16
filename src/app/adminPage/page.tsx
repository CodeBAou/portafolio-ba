"use client"
import React ,{useState, useEffect} from 'react';
import Style from './style.module.css';
import OneTab from '../../components/google0Auth/onetab';
import {useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Url_config from '../../../Url_config';

const adminPage = () => {

  const { data: session } = useSession();
  const [userDB, setUserDB] = useState({
     token:"",
     role:0
  });

  const url = new Url_config({hostname:"localhost", port:3005});

  useEffect(()=>{

    
    fetch(url.route_auth,{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(session) // body data type must match "Content-Type" header
        })
        .then(res=>{

            res.json().then( res=> {
              
                setUserDB({
                    token:res.token,
                    role:res.role
                });
            });

        })
    .catch( err => {
        console.log(err);
    });

  },[])
    
    if (session && session.user && userDB.token != "" ) { //El usuario existe se muestra la pagina
        return (
          
                <div className={Style.privateContent}>

                    {/**HEADER */}
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
                    onClick={() => {
                        signIn();
                    }}
                    className={Style.img}
                />  
            </div>

        </div>
    )
}

export default adminPage;