import React from 'react';
import Style from './FeaturedProjects.module.css';
import Image from 'next/image';


const FeaturedProjects = () => {
    return(
        <div className={Style.content}>
            <div className={Style.secondcontent}>
                <div className={Style.tab}>
                    { //buton tabulacion
                    }
                </div>
                <div className={Style.items}>
                    { //Items fotos y enlaces a proyectos

                    }
                    
                    <div className={Style.imgcontent}></div>
                    <div className={Style.imgcontent}></div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects;