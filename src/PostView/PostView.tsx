"use client"
import React,{useState,useEffect}from 'react';
import Style from './PostView.module.css';
import Url_config from '@/Url_config';

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
    const [id,setId]                      = useState("");
    const [postData,setPostData]          = useState<dataPostI>();
    const [sectionsData, setSectionsData] = useState<dataSectionsI[]>();

    useEffect(() => {

        if(props.id != undefined){
            fetch( url.route_GetPost(props.id), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resultPost => resultPost.json())
            .then(resultPost=> {
                setPostData(resultPost[0]);
            });
    
    
            fetch( url.route_GetSections(props.id), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            }).then( resultSections => resultSections.json())
                .then( resultSections => {
                    setSectionsData(resultSections);
            });
    
        }
       
    },[props]);

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
        <div className={Style.view}>
                <img className={Style.enlace} src={postData?.enlace} alt="Imagen encabezado del post"/>
                <div className={Style.titleContent}>
                    <h2 className={Style.titulo}>{postData?.titulo}</h2>
                </div>
                {getSection()}  
        </div>
    )
}

export default PostView;