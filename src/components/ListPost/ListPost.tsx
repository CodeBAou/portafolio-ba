import React, {useState,useEffect} from 'react';
import Style from './Style.module.css';
import StatusPostItemList from '../statusPostItemList/StatusPostItemList';
import Url_config from '../../Url_config';

/** Componente para realizar peticion al servidor y listar todos los posts */
interface ListPostProps {
    totalPages:string;
    limit:number;
    token:string;
}

interface dataItemPostListTYPE{
    _id:string,
    titulo:string,
    data:string,
    descripcion:string,
    tags:string,
}

const ListPost = (props:ListPostProps) => {

    const [ posts, setPosts ] = useState<React.ReactNode>([]);

    const savePost = ( postsarr:dataItemPostListTYPE[] ) => {

        const postsnew = postsarr.map( post => {
            return <StatusPostItemList  key = { post._id } id = { post._id } titulo = { post.titulo } data = { post.data } desc = { post.descripcion } tags = { post.tags }  postsFN = { () => setPosts } token = { props.token } />
        });
        
        setPosts(postsnew);
    }

    /** 
    *  Llama a un fetch a la url para obtener todos los posts y los almacena en el estado posts
    *  Realiza la llamada cada vez que  deletepost se actualiza
    *  reseta el estado deletepost a vacio
    */
    useEffect(() => {
        
        // props.limit
        // props.totalPages
        const urlserver = new Url_config();
        
        //All posts
        fetch(urlserver.route_allposts(0),{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( res => {

            res.json().then( res => {
                savePost(res.data);
            })
            .catch( err => {
                console.log(err);
            });

        }).catch( err => {
            console.log(err);
        });

    },[posts]);
    
    return(
        <div className={Style.content}> 
     
               <table className={Style.table}>
                    <tr>
                        <th className={Style.th}>ID</th>
                        <th className={Style.th}>Titulo</th>
                        <th className={Style.th}>Descripcion</th>
                        <th className={Style.th}>Data</th>
                        <th className={Style.th}>Tags</th>
                    </tr>
                    {posts}
               </table>

        </div>
    )
}

export default ListPost;