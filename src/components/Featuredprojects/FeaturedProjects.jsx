import React from 'react';
import Style from './FeaturedProjects.module.css';
import ItemProject from '../itemProject/itemProject';
import ProyectosDestacadosTab from '../proyectosDestacadosTab/proyectosDestacadosTab';
import Link from 'next/link';

const FeaturedProjects = () => {
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
                    <ItemProject 
                        title='Web personal'
                        src='/imagenes/webpersonalb.png'
                    />
                    
                    <ItemProject 
                        title='Script Archito'
                        src='/imagenes/archito.png'
                    />
                   
                    <ItemProject 
                        title='Web Empresa Viso'
                        src='/imagenes/visopage.png'
                    />
                   
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects;