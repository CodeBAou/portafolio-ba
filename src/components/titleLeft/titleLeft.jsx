import React from 'react';
import style from './titleleft.module.css';
const TitleLeft = (props) => {
    return(
        <div className={style.content}>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.line}></span>
        </div>
    )
}

export default TitleLeft;