import React from 'react';
import Style from './NuevoTool.module.css';
import Image from 'next/image';

interface NuevoToolPropsType{
    token:string;
}

const NuevoTool = (props:NuevoToolPropsType) => {
    return(
        <div className={Style.content} >
            <div className={Style.toolsContent}></div>
            <div className={Style.tableroEdicionPost}>
                <div className={Style.post}>
                
                </div>
                <div className={Style.sections}>
                    <Image 
                        className={Style.icon}
                        src='./h2.svg'
                        width={80}
                        height={80}
                        alt="icon h2"
                    />
                    <Image
                        className={Style.icon}
                        src='./text.svg'
                        width={80}
                        height={80}
                        alt="icon text"
                    />
                    <Image
                        className={Style.icon}
                        src='./icoImagen.svg'
                        width={80}
                        height={80}
                        alt="icon text"
                    />
                    <Image
                        className={Style.icon}
                        src='./code.svg'
                        width={80}
                        height={80}
                        alt="icon text"
                    />
                </div>
            </div>
        </div>
    )
}

export default NuevoTool;