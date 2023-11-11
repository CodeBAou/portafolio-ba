import React,{useState, DragEvent, useEffect} from 'react';
import Style from './Style.module.css';
import ItemProject from '@/components/itemProject/itemProject';
import FeatureProjects from '@/components/Featuredprojects/FeaturedProjects';
import Url_config from '@/Url_config';

interface DestacadoToolsI{
    title:string;
    src:string;
}

interface dataI{
    data:string;
    descripcion:string;
    enlace:string;
    miniatura:string;
    tags:string;
    destacado:boolean;
    orderDestacado:number;
    titulo:string;
    __v:number;
    _id:string;
}

interface dataIFeatureProjects{
    id:string,
    miniatura:string,
    titulo:string
}

interface propsI{
    token:string
}

const DestacadosTools = (props:propsI) => {

    const url = new Url_config();
    const [saveValid,setSaveValid] = useState(Style.saveValid);  // Style.saveValid | Style.saveInvalid
    const [ preview    , setPreview ]    = useState(""); //Miniatura (enlace imagen)

    const [ destacado1 , setDestacado1 ] = useState<dataI>({
        data:"",
        descripcion:"",
        enlace:"",
        miniatura:"",
        tags:"",
        destacado:false,
        orderDestacado:1,
        titulo:"",
        __v:1,
        _id:"",
    }); //id item para setear en la base de datos como descatado

    const [ destacado2 , setDestacado2 ] = useState<dataI>({
        data:"",
        descripcion:"",
        enlace:"",
        miniatura:"",
        tags:"",
        destacado:false,
        orderDestacado:1,
        titulo:"",
        __v:1,
        _id:"",
    }); //id item para setear en la base de datos como descatado

    const [ destacado3 , setDestacado3 ] = useState<dataI>({
        data:"",
        descripcion:"",
        enlace:"",
        miniatura:"",
        tags:"",
        destacado:false,
        orderDestacado:1,
        titulo:"",
        __v:1,
        _id:"",
    });//id item para setear en la base de datos como descatado

    const [ dataPost   , setDataPost ]   = useState<dataI[]>([]); //todos los posts 
    
    //Devuelve un post a partir de un id  , return interface dataI
    const searchPostId = (id:string) => {
        
        let postd:dataI ={
            data:"",
            descripcion:"",
            enlace:"",
            miniatura:"",
            tags:"",
            destacado:false,
            orderDestacado:1,
            titulo:"",
            __v:1,
            _id:"",
        } ;

        dataPost.forEach( post => {
             if(post._id === id){
                postd = post;
             }
        });

        return postd;
    }

    const setD1 = ( e:DragEvent) => {
        e.preventDefault();
        let id = e.dataTransfer.getData("text");
        let post = searchPostId(id);
        setDestacado1(post);
    };
 
    const setD2 = ( e:DragEvent) => {
        e.preventDefault();
        let id   = e.dataTransfer.getData("text");
        let post = searchPostId(id);
        setDestacado2(post);
    };
 
    const setD3 = ( e:DragEvent ) => {
        e.preventDefault();
        let id   = e.dataTransfer.getData("text");
        let post = searchPostId(id);
        setDestacado3(post);
    };

    const allowDrop = (e:DragEvent) =>  {
        e.preventDefault();
    }

    const drag = (e:DragEvent, id:string) => {
        e.dataTransfer.setData("text", id);
    }

    const getItemsPostList = () => {

        return dataPost.map( (item: dataI) => {

            <span
                key         = { item._id }
                className   = { Style.dragelem }
                draggable   = "true" 
                onDragStart = { (e) => drag(e,item._id) }
                onClick     = { (e) => setPreview(item.miniatura) }
            >
                {item.titulo}
            </span>
              
        });
    }

    useEffect( () => {

        fetch(url.route_allpostsNoTab(0),{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => 
            {
                setDataPost(data.data)
            }
        );
        
        //Se cargar los post destacados
        const getDestacados = fetch(url.route_DestacadosGet(),{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( response => response.json() )
        .then(res => {
           
                res.forEach( (element:dataI) => {
                    if( element.orderDestacado == 1 ){
                        setDestacado1(element);
                    }
                    else if( element.orderDestacado == 2  ){
                        setDestacado2(element);
                    }
                    else if ( element.orderDestacado == 3){
                        setDestacado3(element);
                    }
                });
            
          
        })
        .catch(err => {
            console.log(err);
            alert("No se ha podido cargar los posts destacados");
        });

       

    },[]);


    const saveDestacados = async () => {

        const dataDestacados = [
            destacado1,
            destacado2,
            destacado3
        ];

       
        try {
            const response = await fetch(url.route_Destacados(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                },
                body: JSON.stringify(dataDestacados)
            });
        
            if (response.ok) {
                const data = await response.json();
                alert(data.msg);
            } else {
                console.error('Error en la solicitud');
                alert("Error en la solicitud");
            }
        } catch (err) {
            console.error(err);

        }
        
       
    }

    return(
         <div className = {Style.content}>

            <div className = {Style.previwContent}>

                <FeatureProjects d1 = { destacado1 } d2 = { destacado2 } d3 = { destacado3 } />  

                <div className = {Style.contentDesc}>

                    <div className={Style.saveContent}>
                        <button 
                            className={Style.save}
                            onClick = { () => saveDestacados() }
                        >Guardar</button>
                        <span className={Style.saveValid}></span>
                    </div>

                    <div className = {Style.previwContent}>
                        <img className = {Style.imgPreview} src = {preview} />
                    </div>

                    <div className={Style.dropContent}>
                        <div className = {Style.inputD}  onDrop = { setD1 } onDragOver  = {allowDrop} > <span className = {Style.DescText} > {destacado1.titulo} </span> </div>
                        <div className = {Style.inputD}  onDrop = { setD2 } onDragOver  = {allowDrop} > <span className = {Style.DescText} > {destacado2.titulo} </span> </div>
                        <div className = {Style.inputD}  onDrop = { setD3  } onDragOver = {allowDrop} > <span className = {Style.DescText} > {destacado3.titulo} </span> </div>   
                    </div>

                </div>

            </div>

            <div className = {Style.listPost}>

                <h2 className = {Style.titleListPost}>Lista Posts</h2>

                {dataPost.map((item: dataI) => (
                    <span
                        key={item._id}
                        className={Style.dragelem}
                        draggable="true"
                        onDragStart={(e) => drag(e, item._id)}
                        onClick={(e) => setPreview(item.miniatura)}
                    >
                        {item.titulo}
                    </span>
                ))}
                
            </div>
        </div>
    )
}

export default DestacadosTools;