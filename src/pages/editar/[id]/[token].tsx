import React, { useState, useEffect } from 'react';
import Style from './Style.module.css';
import Url_config from '@/Url_config';
import { useParams } from 'next/navigation';
import Separator from '../../../PostBuild/separator/Separator';
import SeparatorNuevo from '../../../PostBuild/separatorNuevo/SeparatorNuevo';
import { set } from 'zod';

interface dataPostI {
  _id: string;
  titulo: string;
  descripcion: string;
  enlace: string;
  miniatura: string;
  tags: string;
}

interface dataSectionsI {
  _id: string;
  post: string;
  text: string;
  img: string;
  type: number;
  order: number;
  __v: number;
}

function EditPage() {

  const [postData, setPostData]         = useState<dataPostI>();
  const [sectionsData, setSectionsData] = useState<dataSectionsI[]>([]);
  const [sectionsDel, setSectionsDel]   = useState<dataSectionsI[]>([]);
  const [countNewSection, setCountNewSection] = useState(0);

  const params                          = useParams<{ id: string; token: string }>();
  const url                             = new Url_config();
  
  //Obtener los datos del post
  const fetchData = async () => {

    if(params && params.id != undefined){
      try {

        const responsePost = await fetch(url.route_GetPost(params?.id), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        const resultPost = await responsePost.json();
        setPostData(resultPost[0]);
  
        // Obtener datos de las secciones
        const responseSections = await fetch(url.route_GetSections(params?.id), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors'
        });
  
        const resultSections = await responseSections.json();
        setSectionsData(resultSections);
  
      } catch (error) {
        console.error('Error en la solicitud:', error);
        // Manejar el error según tus necesidades
      }
    }
   
  }

  useEffect(() => {

    fetchData();
  
    // Limpieza (opcional)
    return () => {
      // Realizar cualquier limpieza necesaria, si es necesario
    };

  }, [params]);


  //Actualiza una nueva seccion que ya existe, no se comunica con el servidor
  const updateSection = (id:string ,value:string, type:number) => {


       //Se copia el array
       let arr     = [...sectionsData!]; 
       //Se obtiene el index dentro del array del elmento que tiene el id pasado como parametro
       const index = sectionsData?.findIndex(sec =>  sec._id === id); 

        //Tipo text , se guarda en la propiedad <text> dentro de section
        if(type == 3){
          arr[index]  = {
            ...arr[index]!,
            img: value
          }
        }else{
          arr[index]  = {
            ...arr[index]!,
            text: value
          }
        }
       
       setSectionsData(arr);
  }

  //Actualiza los datos del post en el servidor HTTP
  const setUpdatePost = async () => {
    return await fetch(url.route_updatePost(), {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
        'authorization':`${params!.token}`
      },
      body:JSON.stringify(postData)
    });
}

  //Actualiza sus secciones en el servidor HTTP , se filtra por id que no contegan _id : id-n
  const UpdateMultiSectionsHttp = async () => {

    let sectionsUpdate = sectionsData?.filter( data => !data._id.includes("id-")  );
    console.log(sectionsUpdate);

    //Se filtra las sections , las sections que tengan la propieda _id:"" no se actualizan sino que se guardan con otra peticion
    return await fetch( url.route_updateSections(), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization':`${params!.token}`
      },
      body:JSON.stringify(sectionsUpdate)
    });
      
  }

   //Peticion para eliminar las secciones
   const deleteSectionHTTP= async () => {

    console.log(url.route_deleteSections());
    
    return await fetch( url.route_deleteSections(), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`${params!.token}`
      },
      body:JSON.stringify(sectionsDel)
    });
  }

  const nuevaSectionsHttp = async() => {

    let sectionsUpdate  = sectionsData?.filter( data => data._id.includes("id-")  );
    let sectionsidclean = sectionsUpdate.map( section => ({ ...section, _id: "" }) );
    console.log(sectionsidclean);

    if( sectionsUpdate.length > 0 ){
      return await fetch( url.route_SectionById(params?.id), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`${params!.token}`
        },
        body:JSON.stringify(sectionsidclean)
      });
    }

  }

  //Llama a las funciones  setUpdatePost y setUpdateMultiSections para actualizar todo el post
  const updateHTTP = async() => {

    //Todas las promesas
    const cosultasPromesas = [];

    //ALMACENAR PROMESAS
    //Se actualiza los datos del post
    cosultasPromesas.push( await setUpdatePost() );
    //Actualizar sections
    cosultasPromesas.push( await UpdateMultiSectionsHttp() );
    //Crea Nuevas secciones
    cosultasPromesas.push( await nuevaSectionsHttp() );
    //Elimina las secciones 
    if(sectionsDel.length > 0){  cosultasPromesas.push( await deleteSectionHTTP() ); }
        
    //Resolver todas las promesas
    return Promise.all(cosultasPromesas)
    .then( respuestas => {

       //Verificar si todas son exitosas
       const todasExitosas = respuestas.every( respuesta => respuesta?.ok );

       if(todasExitosas){
           alert("Se ha actualizado el post correctamente");
       }else{
           alert("No se ha podido actualizar correctamente todo el post");
       }
    })
    .catch( err => console.log(err) );

   
  }


  

  //Modifica el tipo de campo de una seccion ya existente
  const modSection = (type:number, order:number) => {

    let sections = sectionsData;

    let nuevaLista = sections?.map ( section => {
      if(section.order == order){
         return {...section, type:type};
      }else{
        return section;
      }
    });

    setSectionsData(nuevaLista);
  }

  //Añade una nueva seccion al estado de secciones y reordena la propieda <order> de cada seccion, no se comunica con el servidor
  const newSection = (type:number, order:number) => {

    let sections   = (sectionsData == undefined)? []:sectionsData;
    let id =  `id-${sectionsData.length}`;
    sections.push({
        _id: id,
        post: "",
        text: "",
        img: "",
        type: type,
        order: sectionsData.length,
        __v: 0,
    });

    let ordenado = [...sections].sort((a, b) => a.order - b.order);
    setSectionsData(ordenado);
  }

  //Elimina una seccion del array, si solo queda una seccion no la elimina
  const del = (order:number) => {
    if (sectionsData && sectionsData.length > 1) {
      let nuevasSecciones = sectionsData.filter(section => section.order !== order);
      setSectionsData(nuevasSecciones);
      let sectionsDel = sectionsData.filter( section => section.order == order);
      setSectionsDel(sectionsDel);
    }
  }
  

  return (

    <div className={Style.content}>

      <div className={Style.contentHead}>

        <h1 className={Style.title}>Edit</h1>
        <div className={Style.menu}> {/** Guardar */}
          <button className={Style.Save} onClick = { () => updateHTTP() }  >Guardar</button>
        </div>

      </div>

      <div className={Style.main}>

        {/** Datos posts */}

        {/** Enlace Imagen */}

        <input type="text" className={Style.enlaceImagenPost} value={postData?.enlace} onChange={(e) => {
            setPostData((prevData) => ({
              ...prevData!,
              enlace: e.target.value,
            }));
        }} />

        {/** Imagen Principal del post */}
        <img className={Style.imagenSection} src={postData?.enlace} alt="Imagen encabezado del post" />
       
        {/** Titulo del Post */}
        <div className={Style.titleContent}>
          <input type="text" className={Style.titulo} value={postData?.titulo}
            onChange={ (ev) => {
              setPostData((prevData) => ({
                ...prevData!,
                titulo: ev.target.value
              }))
            }}
          />
        </div>
        
        {/** Descripcion del Post */}
        <h2 className={Style.DescripcionTitle}>Descripcion</h2>
        <textarea className={Style.parrafoSection} onChange={ (ev) => {
            setPostData( (prevdata) => ({
              ...prevdata!,
              descripcion: ev.target.value
            }))
        }} value={postData?.descripcion}></textarea>
        
        {/** Tags del Post */}
        <h2 className={Style.DescripcionTitle}>Tags</h2>
        <textarea className={Style.parrafoSection} onChange={(ev) => {
          setPostData((prevData) => ({
            ...prevData!,
            tags: ev.target.value
          }))
        }} value={postData?.tags}></textarea>

        <div className={Style.divisor}><span> Sections </span></div>

        {/** Sections */}
        {
          sectionsData?.map(section => {

            switch (section.type) {
              case 1:
                return <>  
                          <Separator key={`separator-${section.order}`}  title="Imagen" type={section.type} order={section.order} fn={modSection} del={del}/>
                          
                          <input key={(section._id != "") ? `section-${section._id}`: sectionsData.length+1 } type="text" className={Style.tituloSection} value={section.text} onChange={(ev) => {
                                ev.preventDefault();
                                
                                updateSection(section._id,ev.target.value,section.type);     
                          }} />
                      </>
                      
                        break;
              case 2:
                return  <>
                          <Separator key={`separator-${section.order}`}  title="Parrafo" type={section.type} order={section.order} fn={modSection} del={del}/>
                          <textarea key={(section._id != "") ? `section-${section._id}`: sectionsData.length+1 } className={Style.parrafoSection} onChange={(ev) => {
                              ev.preventDefault();
                              let id = (section._id == "") ? `id-${sectionsData.length}`:section._id;
                              updateSection(section._id,ev.target.value,section.type); 
          
                          }} value={section.text}></textarea>
                        </>
                        break;
              case 3:
                return  <>
                          <Separator key={`separator-${section.order}`}  title="Imagen" type={section.type} order={section.order} fn={modSection} del={del}/>

                          <div key={(section._id != "") ? `section-${section._id}`: sectionsData.length+1 } className={Style.contentImageSection}>

                            <input  type="text" className={Style.imagenSectionInput} value={section.img} onChange={(ev)=>{
                                  ev.preventDefault();
                                  
                                  updateSection(section._id,ev.target.value,section.type); 
                            }}/>

                            <img  src={section.img} alt="imagen seccion" className={Style.imagenSection} />
                            
                          </div>
                        </>
                        break;
              case 4:
                return  <>
                          <Separator key={`separator-${section.order}`}  title="Codigo" type={section.type} order={section.order} fn={modSection} del={del}/>
                          <textarea key={(section._id != "") ? `section-${section._id}`: sectionsData.length+1 } className={Style.parrafoSection} onChange={(ev)=>{
                                ev.preventDefault();
                               
                                updateSection(section._id,ev.target.value,section.type); 
                          }} value={section.text}></textarea>
                        </>
                        break;
            }
            
          })
        }

        <SeparatorNuevo fn={ newSection } order={ (sectionsData) ? sectionsData.length : 0}/>

      </div>
    </div>
  )
 

}

export default EditPage;