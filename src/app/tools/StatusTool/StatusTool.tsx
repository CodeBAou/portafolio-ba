import React,{useState, useEffect} from 'react';
import Style from './style.module.css';
import ListPost from '../../../components/ListPost/ListPost';
import Estadistica from '../estadistica/Estadisticas';
import Url_config from '../../../Url_config';

interface  StatusToolType{
    token:string
}

/**
 * Listan las estadisticas de la base de datos
 * 
 */
const StatusTool = (props:StatusToolType) => {

    const [dataEst, setDataEst]= useState({total_posts:"?"});
    const [limit, setLimit] = useState(0);//numero de posts que se listan

    useEffect(()=>{

        const urls = new Url_config();
        setLimit(urls.limite_Tabulacion_postlist);

        if(dataEst.total_posts == "?"){
            fetch(urls.route_estadisticas(),{
                method:'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then( res => {
               res.json().then( res => setDataEst(res))
            }).catch( err => {
                setDataEst({total_posts:"-"});
            });
    
        }
      
    },[]);

    return(
        <div className={Style.content}>

            <nav className={Style.menu}>
                <input className={Style.btnMenu} type="button" value="All"/>
                <input className={Style.btnMenuBuscador} type="text" placeholder='Busca un post' />
                <input className={Style.btnMenu} type="button" value="Buscar"/>
            </nav>
            
            <div className={Style.TableroTools}>
               <Estadistica totalPages={dataEst.total_posts}/>
               <ListPost totalPages={dataEst.total_posts} limit={limit} token={props.token}/>
            </div>
        </div>
    )
}

export default StatusTool;