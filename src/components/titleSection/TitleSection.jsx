import React from 'react';
import styleTS from './titlesection.module.css';
import LayoutSection from '../layoutSection/layoutSection';

const TitleSection = ( props ) => {
    return(
        <div className={styleTS.content}>
            
            <div className={styleTS.elemscontent}>
                <div className={styleTS.line}></div>
                <h1 className={styleTS.title}>{props.title}</h1>
                <div className={styleTS.linefinal}></div>
            </div>
            
        </div>
      
    )
}

export default TitleSection;