
import React,{useEffect,useState} from 'react';
import Style from './Style.module.css';
import Url_config from '../../../Url_config';

interface postDataI{
    titulo:string,
    descripcion:string,
    data:string,
    tags:string
}

interface sectionsDataI{
    id:string,
    post:string,
    text:string,
    img:string,
    order:number,
    type:number
}

interface propsSavePost{
    posts:postDataI;
    sections:sectionsDataI[];
    token:string
}

const SavePost = (props:propsSavePost) => {
    
    const url = new Url_config();
    let valido = true;

    const [data,setData] = useState({
        post:props.posts,
        sections:props.sections
    });

    //Envia las peticiones al servidor para guardar los datos del post
    const save = async () => {

        const prepareData = {
            post:props.posts,
            sections:props.sections
        }

        if(valido){
            const response = await  fetch( url.route_savePost(),{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':props.token
                },
                body: JSON.stringify(prepareData)
            })
            .then(response => response.json())
            .then(data => {
                alert(data.msg);
            })
            .catch(err => alert(err))
        }else{
            alert("Post no valido");
        }
        
    }

    return(
        <input type="button" className={Style.btn} value="Guardar" onClick={save}/>
    )
   
}

export default SavePost;