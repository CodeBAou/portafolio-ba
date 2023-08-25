import React from 'react';
import styleTS from './titlesection.module.css';

const TitleSection = ( props ) => {
    return(
        <div className={styleTS.content}>
            <div className={styleTS.line}></div>
            <h2 className={styleTS.title}>{props.title}</h2>
        </div>
    )
}

export default TitleSection;