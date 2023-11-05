import React from 'react';
import style from './proyectosDestacadosTab.module.css';
import Link from 'next/link';
import Image from 'next/image';


const ProyectosDestacadosTab = () => {
    return(
        <div className={style.tabcontent}>
            <div className={style.tab}></div>
            <div className={style.subtitle}>
                <Link href="/proyectos" className={style.verTodos} >
                    <Image
                        src="/eye.svg"
                        width={60}
                        height={60}
                        alt="Flecha atras"
                    />
                </Link>
            </div>
        </div>
    )
}

export default ProyectosDestacadosTab;

