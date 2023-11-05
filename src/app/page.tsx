"use client"
import Image from 'next/image'
import styles from './page.module.css';
import Header from '../components/header/Header';
import Contacto from '../components/contacto/Contacto';
import TitleSection from '../components/titleSection/TitleSection';
import LayoutSection from '@/components/layoutSection/layoutSection';
import TitleLeftSection from '../components/titleLeft/titleLeft';
import LayoutList from '../components/LayoutList/LayoutList';
import FeatureProjects from '../components/Featuredprojects/FeaturedProjects';
import Habilidades from '../components/Habilidades/habilidades';
import Idiomas from '../components/Idiomas/Idiomas';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {

  const habilidades = [
    {
      src:'./html.svg',
      href:"#",
      alt:"icono habilidad html",
      color:''
    },
    {
      src:'./css.svg',
      href:'#',
      alt:'',
      color:'white'
    },
    {
      src:'./js.svg',
      href:'#',
      alt:'',
      color:''
    },
    {
      src:'./react.svg',
      href:'#',
      alt:'',
      color:''
    },
    {
      src:'./node.svg',
      href:'#',
      alt:'',
      color:''
    },
    {
      src:'./mongodb.svg',
      href:'#',
      alt:'',
      color:''
    },
    {
      src:'./nextjs.svg',
      href:'#',
      alt:'',
      color:'white'
    },
  ];

  return (
    <>

      <Header title="Boris Alvarez" rw="Frontend" lw1="Desarrollador Web" lw2="Diseño" image="/BorisPerfil.webp"/>

      <main className={styles.main}>
      
          <Contacto github="https://github.com/CodeBAou" linkedin="https://www.linkedin.com/in/borisou" email="borisafou@gmail.com"/>
          
          <LayoutSection>
              <TitleSection title="Formación"/>
          </LayoutSection>

          <LayoutSection>
              <TitleLeftSection title="2015"/>
          </LayoutSection>

          <LayoutSection>
              <LayoutList>
                <p className={styles.normal}> F<span  className={styles.textblue}>P</span> Sistemas Microinformáticos y Redes</p>
              </LayoutList>
          </LayoutSection>

          <LayoutSection>
              <TitleLeftSection title="2019"/>
          </LayoutSection>

          <LayoutSection>
              <LayoutList>
                <p className={styles.normal}> F<span className={styles.textblue}>P</span> Desarrollo de Aplicaciones web</p>
              </LayoutList>
          </LayoutSection>

          <LayoutSection>
              <TitleLeftSection title=" -- "/>
          </LayoutSection>

          <LayoutSection>
              <LayoutList>
                <Image
                  src="/react.svg"
                  width={60}
                  height={60}
                  alt="react icon"
                />
                <p className={styles.normal}> Curso de Introduccion desde cero y primeros pasos <span className={styles.textblue}>udemy</span></p>
              </LayoutList>
          </LayoutSection>

          <LayoutSection>
              <LayoutList>
                <Image
                  src="/react.svg"
                  width={60}
                  height={60}
                  alt="react icon"
                />
                <p className={styles.normal}> La guia completa: Hooks , context redux, MERN, 15apps <span className={styles.textblue}>udemy</span></p>
              </LayoutList>
          </LayoutSection>

          <LayoutSection>
              <LayoutList>
                <Image
                  src="/js.svg"
                  width={50}
                  height={50}
                  alt="react icon"
                />

                <Image
                  src="/angular.svg"
                  width={50}
                  height={50}
                  alt="react icon"
                />

                <Image
                  src="/node.svg"
                  width={50}
                  height={50}
                  alt="react icon"
                />

                <Image
                  src="/mongodb.svg"
                  width={50}
                  height={50}
                  alt="react icon"
                />

                <p className={styles.normal2}> Desarrollo en javascript , angular, node y mongodb <span className={styles.textblue}>udemy</span></p>
              </LayoutList>
          </LayoutSection>

          <LayoutSection>
              <LayoutList>
                <Image
                  src="/node.svg"
                  width={50}
                  height={50}
                  alt="react icon"
                />
                <p className={styles.normal}> Curso de cero a experto - Fernando Herrera <span className={styles.textblue}>udemy</span></p>
              </LayoutList>
          </LayoutSection>

          <LayoutSection>
              <TitleSection title="Proyectos"/>
          </LayoutSection>

          <FeatureProjects/>

          <LayoutSection>
              <TitleSection title="Tecnologias"/>
          </LayoutSection>

          <Habilidades datos={habilidades} />

          <LayoutSection>
              <TitleSection title="Idiomas"/>
          </LayoutSection>

          <LayoutSection>
              <LayoutList>
                <p className={styles.normal}> Estudiando Ingles  <span className={styles.textblue}>busuu</span></p>
              </LayoutList>
          </LayoutSection>

          <LayoutSection>
              <LayoutList>
              <Image
                  src="/python.svg"
                  width={50}
                  height={50}
                  alt="react icon"
                />
                <p className={styles.normal}> Estudiando Python </p>
              </LayoutList>
          </LayoutSection>

          <LayoutSection>
              <TitleLeftSection title=""/>
          </LayoutSection>
      </main>

      <footer className={styles.footer}>
        
            <div className={styles.footeracces}> 
              <Link href="/adminPage"> 
                <Image
                  src="/admin-icon.svg"
                  width={50}
                  height={50}
                  alt="admin icon"
                />
              </Link>
            </div>

            <div className={styles.footerlegal}>  
              <p>Esta web pertenece a Boris Álvarez, todos los derechos reservados.</p> 
            </div>
            
      </footer>

     

    </>
  )
}
