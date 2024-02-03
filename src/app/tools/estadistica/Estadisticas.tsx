import React, {useState, useEffect} from 'react';
import Style from './Style.module.css';
import Url_config from '../../../Url_config';

const Estadistica = () => {

    const [totalPost,setTotalPost] = useState(0);
    const urls = new Url_config();

    useEffect( () => {

        const obtenerTotalPosts = async () => {
            try {
              const response = await fetch(urls.route_totalPost(), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                }
              });
        
              const data = await response.json();
              console.log(data);
              setTotalPost(data.total);
              
            } catch (err) {
              console.log({
                mensaje: "Error en la petición Estadística - Post Total",
                err: err
              });
            }
          };
        
          obtenerTotalPosts(); 
        

    },[]);

    return(
        <table className={Style.table}>
          <tr>
            <td className={Style.titulo}> Publicaciones Totales </td>
            <td className={Style.data}> { `${totalPost}` } </td>
          </tr>
        </table>
    ) 
}

export default Estadistica;