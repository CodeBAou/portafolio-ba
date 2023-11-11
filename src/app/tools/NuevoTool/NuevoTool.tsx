import React,{useState,useEffect} from 'react';
import Style from './NuevoTool.module.css';
import Image from 'next/image';
import HeaderPost_build from '../../../PostBuild/headerPost_build/HeaderPost_build';
import { v4 as uuidv4 } from 'uuid';
import H2_build from '../../../PostBuild/h2_build/H2_build';
import P_build from '../../../PostBuild/p_build/P_build';
import Imagen_build from '../../../PostBuild/imagen_build/Imagen_build';
import Codigo_build from '../../../PostBuild/codigo_build/Codigo_build';
import SavePost from '../savePost/SavePost';

interface NuevoToolPropsType{
    token:string;
}

interface postDataI{
    titulo:string,
    descripcion:string,
    data:string,
    miniatura:string,
    url_miniatura:string,
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
}

const NuevoTool = (props:NuevoToolPropsType) => {

    const [ postDATA, setPostDATA ]        = useState<postDataI>({titulo:"",descripcion:"",data:"",url_miniatura:"",miniatura:"",tags:"",enlace:"",destacado:false,orderDestacado:0}); //datos del post {titulo, desc, data, url_miniatura, tags}
    const [ sectionDATA, setSectionDATA ]  = useState<sectionsDataI[]>([]); // //datos de cada secction , [{id,post,parrafo,img,order,type}, ...]
   
    //Actualiza los estados sectionDATA y sectionsObj
    useEffect( () => {
        
        
        //nsections.sort( (a,b) => a.order - b.order );
        //setSectionsObj( arrSections );

    },[sectionDATA]);

    const allowDrop   = ( ev:React.DragEvent<HTMLDivElement> ) =>{ ev.preventDefault(); }

    //Envia data del objecto arrastrado al objecto drop
    const drag        = ( ev:React.DragEvent<HTMLDivElement> ) => { 
        let type_elem = parseInt( ev.currentTarget.id.split("-")[0] ) ;
        ev.dataTransfer.setData( "type","" + type_elem );
    }   

    //Nuevo objecto section 
    const drop = (ev:React.DragEvent<HTMLDivElement>) =>{
        
        ev.preventDefault();

        let data  = {
            id: uuidv4(),
            post:"",
            text:"",
            img:"",
            order: sectionDATA.length+1,
            type: parseInt( ev.dataTransfer.getData("section") )
        }; 

        setSectionDATA([ ...sectionDATA, data ]);
        
    }

    //Busca el objecto data de una seccion por id (secondID) y actualiza su valor
    const Update = (id:string,value:string) => {
        sectionDATA.forEach( section => {
            if( section.id == id) {
                switch(section.type){
                    case 3:
                        section.img = value;
                        break;
                    default:
                        section.text = value;
                        break;
                }
            }
        });
    }

    // Indicar con el id la seccion a eliminar
    const Delete = (id:string) =>{

        let nuevoArr:sectionsDataI[] = [];

        sectionDATA.forEach( data => {
            if(data.id != id){
                nuevoArr=([ ...nuevoArr, data ]);
            }
        });
        setSectionDATA(nuevoArr);
    }
   
    //Recorre los datos de las secciones y los devulve en forma de componentes
    const getCmpSections = () => {

        const sectiions= sectionDATA.map( section => {
            switch( section.type ){
                case 1://H2 , titulo de seccion
                    return <H2_build id={section.id} text={section.text} order={section.order} Delete={Delete} Update={Update}/>
                    break;
                case 2:// p,  parrafo
                    return <P_build id={section.id} text={section.text} order={section.order} Delete={Delete} Update={Update}/>
                    break;
                case 3:// imagen
                    return <Imagen_build id = {section.id} img={section.img} order={section.order} Delete={Delete} Update={Update}/>
                    break;
                case 4: // codigo
                    return <Codigo_build id={section.id} text={section.text} order={section.order} Delete={Delete} Update={Update}/>
                    break;
            }
        });

        return sectiions;
        
    }

    const GetData = (data:postDataI) => {
        setPostDATA(data);
    }

    return(

        <div className={Style.content} >

            <div className={Style.toolsContent}>
                <SavePost posts={postDATA} sections={sectionDATA} token={props.token}/>
            </div>

            <div className={Style.tableroEdicionPost}>

                <div className={Style.post} onDrop={drop} onDragOver={allowDrop}>
                    <HeaderPost_build titulo={postDATA.titulo} descripcion={postDATA.descripcion} miniatura={postDATA.miniatura} data ={postDATA.data} enlace={postDATA.enlace} tags={postDATA.tags}  GetData={setPostDATA}/>
                    {getCmpSections()}
                </div>

                <div className={Style.sections}>
                    <Image 
                        className={Style.icon}
                        src='./h2.svg'
                        width={80}
                        height={80}
                        alt="icon h2"
                        draggable="true" 
                        onDragStart={ (event) => event.dataTransfer.setData("section","1") }
                        id="1-idsection"
                    />
                    <Image
                        className={Style.icon}
                        src='./text.svg'
                        width={80}
                        height={80}
                        alt="icon text"
                        draggable="true" 
                        onDragStart={ (event) => event.dataTransfer.setData("section","2") }
                        id="2-idsection"
                    />
                    <Image
                        className={Style.icon}
                        src='./icoImagen.svg'
                        width={80}
                        height={80}
                        alt="icon text"
                        draggable="true" 
                        onDragStart={ (event) => event.dataTransfer.setData("section","3") }
                        id="3-idsection"
                    />
                    <Image
                        className={Style.icon}
                        src='./code.svg'
                        width={80}
                        height={80}
                        alt="icon text"
                        draggable="true" 
                        onDragStart={ (event) => event.dataTransfer.setData("section","4") }
                        id="4-idsection"
                    />
                </div>
            </div>
        </div>
    )
}

export default NuevoTool;