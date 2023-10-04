"use client"
import React,{useState,useEffect} from 'react';
import Style from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Buscador from '../../components/buscador/buscador';
import TabProyectos from '../../components/tabProyectos/TabProyectos';
import Url_config from '../../Url_config';
import ProyectoItem from '../../components/proyectItem/ProyectoItem';
import PostView from '@/PostView/PostView';

interface responsedata{
  _id:string;
  data:string;
  descripcion:string;
  miniatura:string;
  tags:string;
  titulo:string;
}
const proyectos = () => {

    const url = new Url_config();
    const [page, setPage] = useState(1);
    const [items,setItems] = useState<responsedata[]>([]);
    const [open,setOpen] = useState(false);
    const [postVidew,setPostView] = useState<React.ReactNode >(<></>);

    const setPageFN = (n:number) => {
        setPage(n);
    }

    useEffect( ( ) => {
        
        fetch(url.route_allposts(page-1),{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
            return res.json();
        }).then(res => {
           
              let dateT = res.data.map( item => {
              let dataMod = new Date(item.data);
              item.data = `${dataMod.getDate()} - ${dataMod.getMonth()} - ${dataMod.getFullYear()}`;
              return item;
            });

            setItems(dateT);

        }).catch(err => {
          console.log(err);
        });

    },[page]);

    const getItems = () =>  {
      return items.map( item => {
        return <ProyectoItem id={item._id} titulo={item.titulo} desc={item.descripcion} miniatura={item.miniatura} date={item.data}  open={OpenPost}/>
      });
    }


    const OpenPost = (id:string) => {
        setPostView(<PostView id={id} close={ClosePost}/>)
    }

    const ClosePost = () => {
      setPostView(<></>);
    }

    return(
      <>
        {postVidew}
        <header className={Style.header}>

            <Link href="/">
                <Image
                    src="/arrow-left.svg"
                    width={40}
                    height={40}
                    alt="Flecha atras"
                    
                />
            </Link>
            
            <Buscador/>

        </header>

        <TabProyectos setPage={setPageFN}/>
        
        <main className={Style.main}>    
             {getItems()}
        </main>
      </>
    )
}

export default proyectos;