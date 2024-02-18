"use client"
import React,{useState,useEffect}from 'react';
import Style from './PostView.module.css';
import Url_config from '@/Url_config';
import Link from 'next/link';
import Image from 'next/image';

interface propsPostView{
    id:string;
}

interface dataPostI{
    _id:string;
    titulo:string;
    descripcion:string;
    enlace:string;
    miniatura:string;
    tags:string;
}

interface dataSectionsI{
    _id:string;
    post:string;
    text:string;
    img:string;
    type:number;
    order:number;
    __v:number;
}

const PostView = (props:propsPostView) => {

    const url                             = new Url_config();
    const [id,setId]                      = useState(props.id);
    const [postData,setPostData]          = useState<dataPostI>();
    const [sectionsData, setSectionsData] = useState<dataSectionsI[]>();

    useEffect(() => {

        const fetchData = async () => {
          try {
                // Obtener datos del post
                if (postData?._id === undefined) {
                const responsePost = await fetch( url.route_GetPost(props.id), {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json'
                    }
                });
        
                const resultPost = await responsePost.json();
                setPostData(resultPost[0]);
            
      
                // Obtener datos de las secciones
                const responseSections = await fetch(url.route_GetSections(props.id), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
                });
        
                const resultSections = await responseSections.json();
                setSectionsData(resultSections);

            }
          } catch (error) {
            console.error('Error en la solicitud:', error);
            // Manejar el error según tus necesidades
          }
        };
      
        fetchData();
      
        // Limpieza (opcional)
        return () => {
          // Realizar cualquier limpieza necesaria, si es necesario
        };
      }, [props.id]);
      

    const getSection = () => {
        
       if(sectionsData){
            return sectionsData?.map( section => {

                switch(section.type){

                    case 1:
                        return <h3 key={section._id} className={Style.tituloSection}>{section.text}</h3>
                        break;
                    case 2:
                        return <p key={section._id} className={Style.parrafoSection}>{section.text}</p>
                        break;
                    case 3:
                        return <img key={section._id} src={section.img} alt="imagen seccion" className={Style.imagenSection}/>
                        break;
                    case 4:
                        return <code key={section._id} className={Style.codigoSection}><pre>{section.text}</pre></code>
                        break;
                }
            })
       }
    }

    return(
        <>
            <Link href="/proyectos">
                <Image 
                    src="/arrowBack.svg"
                    width={50}
                    height={50}
                    alt="Icon back"
                    className={Style.iconBack}
                />
            </Link>

            <div className={Style.view}>
                    <img className={Style.enlace} src={postData?.enlace} alt="Imagen encabezado del post"/>
                    <div className={Style.titleContent}>
                        <h2 className={Style.titulo}>{postData?.titulo}</h2>
                    </div>
                    {getSection()}  
            </div>
        </>
    )
}

export default PostView;