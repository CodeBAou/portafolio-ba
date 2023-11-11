import React,{useState,useEffect} from 'react';
import Style from './FeaturedProjects.module.css';
import ItemProject from '../itemProject/itemProject';
import ProyectosDestacadosTab from '../proyectosDestacadosTab/proyectosDestacadosTab';
import Link from 'next/link';
import Url_config from '@/Url_config';
import Loading from '../loading/loading';

interface dataI{
    data:string;
    descripcion:string;
    enlace:string;
    miniatura:string;
    tags:string;
    titulo:string;
    destacado:boolean;
    orderDestacado:number;
    __v:number;
    _id:string;
}

interface data{
    d1:dataI;
    d2:dataI;
    d3:dataI;
}

const FeaturedProjects = ( props: data ) => {

    const url        = new Url_config();
    const [d1,setD1] = useState<dataI>(props.d1);
    const [d2,setD2] = useState<dataI>(props.d2);
    const [d3,setD3] = useState<dataI>(props.d3);
    const [intentos,setIntentos] = useState(0);
    const [loading,setLoading] = useState(true);
    
    const httpLoadMiniaturas = () => {

        setD1(props.d1);
        setD2(props.d2);
        setD3(props.d3);
        
        //Se cargar los post destacados
        const getDestacados = fetch(url.route_DestacadosGet(),{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( response => response.json() )
        .then(res => {
           
                res.forEach( (element:dataI) => {
                    if( element.orderDestacado == 1 ){
                        setD1(element);
                    }
                    else if( element.orderDestacado == 2  ){
                        setD2(element);
                    }
                    else if ( element.orderDestacado == 3){
                        setD3(element);
                    }
                });
                
                setLoading(false);
          
        })
        .catch(err => {

            let intentosAux = intentos+1;
            
            if( intentos < 5 ){

                setTimeout(() => {
                    httpLoadMiniaturas();
                }, 3000);

                setIntentos(intentosAux);
           }else{
                alert("No se ha podido cargar los datos");
                setLoading(false);           
            }
           
            setIntentos(intentosAux);
        });
    }

    useEffect(() => {
        httpLoadMiniaturas();
        
    },[]);

    const getDesc = () => {

        if(loading == true){
            return <Loading/>
        }else{
            return(
                <>
                    <ItemProject 
                        id    = { d1 && d1._id }
                        title = { d1 && d1.titulo }
                        src   = { d1 && d1.miniatura }
                        key   = { "desc-d1" }
                    />

                    <ItemProject 
                        id    = { d2 && d2._id }
                        title = { d2 && d2.titulo }
                        src   = { d2 && d2.miniatura }
                        key   = { "desc-d2" }
                    />

                    <ItemProject 
                        id    = { d3 && d3._id }
                        title = { d3 && d3.titulo }
                        src   = { d3 && d3.miniatura }
                        key   = { "desc-d3" }
                    />
                </>
            )
        }
        
    }


    return(
        
        <div className={Style.content}>

            <div className={Style.secondcontent}>

                <div className={Style.tab}>
                    { //buton tabulacion 
                    }
                    <ProyectosDestacadosTab/>
                </div>

                <div className={Style.items}>
                    { //Items fotos y enlaces a proyectos 
                    }

                   {getDesc()}
                 
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects;