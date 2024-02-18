import React,{useState}from 'react';
import Style from './Style.module.css';
import Image from 'next/image';

interface propsSeparatorI {
    title:string,
    type:number,
    order:number,
    fn : (type:number, order: number) => void
    del: (order:number) => void
}

const Separator= (props:propsSeparatorI) => {

  
    
    return(
        <div  className={Style.content}>
            
            <h2 className={Style.title}>{props.title}</h2>
            
            <div className={Style.contentMenu}>
                <div className={Style.contentTypesSections}>

                    <input type="button" value="<h>" className={Style.elemTypeSection} onClick={() => {
                        props.fn(1,props.order);
                    }}/>

                    <input type="button" value="<p>" className={Style.elemTypeSection} onClick={() => {
                        props.fn(2,props.order);
                    }}/>

                    <input type="button" value="<Image>" className={Style.elemTypeSection} onClick={() => {
                        props.fn(3,props.order);
                    }}/>

                    <input type="button" value="<Code>" className={Style.elemTypeSection} onClick={() => {
                        props.fn(4,props.order);
                    }}/>
                    
                    <Image
                        src="/delete.svg"
                        width={20}
                        height={20}
                        alt="Picture delete"
                        onClick = { () => props.del(props.order) }
                    />
                </div>
            </div>
        </div> 
    )
}

export default Separator;