import React from 'react';
import Style from './style.module.css';

const Loading = () => {
    return(
        <div className={Style.loadingContent}>
            <div className={Style.loading}> 
                <div className={Style.center}>
                    <div className={Style.line}></div>
                </div>
            </div>  
        </div>
    )
}


export default Loading;