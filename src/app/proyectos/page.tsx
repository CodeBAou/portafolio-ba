import React from 'react';
import Style from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Buscador from '../../components/buscador/buscador';
import TabProyectos from '../../components/tabProyectos/TabProyectos';

const proyectos = () => {


    return(
      <>
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

        <TabProyectos/>
        
        <main className={Style.main}>    

        </main>
      </>
    )
}

export default proyectos;