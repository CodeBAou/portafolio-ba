"use client"
import React ,{useState, useEffect} from 'react';
import Style from './style.module.css';
import OneTab from '../../components/google0Auth/onetab';
import {useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Url_config from '../../Url_config';
import UserTools from '../tools/UserTools/UserTools';
import PostTools from '../tools/PostTools/PostTools';
import DestacadosTools from '../tools/DestacadosTools/DestacadosTools';

const adminPage = () => {

  const [funcionalidad,setfuncionalidad] = useState("Posts");//Indica la herramienta a cargar
  const { data: session } = useSession();
  const [userDB, setUserDB] = useState({
     token:"",
     role:0
  });

  const url = new Url_config();

  useEffect(()=>{

    
    fetch(url.route_auth(),{
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
                console.log("token res..............................");
                console.log(res.token);
                setUserDB({
                    token:res.token,
                    role:res.role
                });
            });

        })
    .catch( err => {
        console.log(err);
        alert("No se ha podido conectar con el servidor")
    });

  },[session])
  
  const selectTool = () => {
        switch(funcionalidad){
            case 'Posts':
                return <PostTools token={userDB.token} />
                break;
            case 'Users':
                return <UserTools/>
                break;
            case 'Destacados':
                return <DestacadosTools/>
                break;
        }
  }

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

                    <div className={Style.content}>
                        <nav className={Style.nav}>
                            <span className={Style.btnOption} onClick={()=>setfuncionalidad("Destacados")}>Destacados</span>
                            <span className={Style.btnOption} onClick={()=>setfuncionalidad("Posts")}>Posts</span>
                            <span className={Style.btnOption} onClick={()=>setfuncionalidad("Users")}>Users</span>
                        </nav>
                        <div className={Style.tablero}>
                                {/** Carga el componente de la Herramienta seleccionada en el estado funcionalidad */}
                                {selectTool()}  
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