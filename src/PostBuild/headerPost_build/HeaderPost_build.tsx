import React,{useState, useEffect} from 'react';
import Style from './Style.module.css';

interface dataPostIprops{
    titulo:string,
    descripcion:string,
    GetData:React.Dispatch<React.SetStateAction<postDataI>>,
    tags:string,
    enlace:string,
    data:string,
    miniatura:string,
    
}

interface postDataI{
    titulo:string,
    descripcion:string,
    data:string,
    miniatura:string,
    enlace:string,
    tags:string,
    destacado:boolean,
    orderDestacado:number
}

interface sectionsDataI{
    id:string,
    post:string,
    text:string,
    img:string,
    order:number,
    type:number
    titulo:string
}


const HeaderPost_build = (props:dataPostIprops) => {

    const [postData,setPostData] = useState<postDataI>({
        titulo:"",
        descripcion:"",
        data:"",
        miniatura:"./MiniaturaMuestra.png",
        enlace:"https://i.pinimg.com/736x/ad/6c/53/ad6c53396f280b56444e6095f39cf447.jpg",
        tags:"",
        destacado:false,
        orderDestacado:0
    });

    useEffect(() => {
        props.GetData(postData);
    },[ postData]);

    return(
        <>
            <div className={Style.content}>

                <input type="text" className={Style.enlaceImagen} onChange={(e) => setPostData({ ...postData, enlace:e.currentTarget.value}) } placeholder=' URL de la imagen'/>
                
                <img src={postData.enlace} alt="imagen del post" className={Style.img}/>
                
                <div className={Style.titleContent}>
                    <input className={Style.title} onChange={(e) => setPostData({ ...postData, titulo:e.currentTarget.value})} placeholder='Titulo del post' />
                </div>

            </div>
            
            <div className={Style.contentDataPost}>

                <div className={Style.contentDesc}>
                    <textarea className={Style.desc} onChange={(e) => setPostData({ ...postData, descripcion:e.currentTarget.value}) } placeholder='Descripcion...' />
                </div>
               
                <div className={Style.contentMiniatura}>
                    <input type="text" className={Style.enlace} onChange={(e) => setPostData({ ...postData, miniatura:e.currentTarget.value}) } placeholder='Enlace Miniatura ...'/>
                    <img src={postData.miniatura} alt="image miniatura del post" className={Style.miniatura} />
                </div>
                
            </div>
            
            <input type="text" className={Style.tags} placeholder="Tags ..." onChange={(e) => setPostData({ ...postData, tags:e.currentTarget.value})}/>
        </>
        
    )
}

export default HeaderPost_build;