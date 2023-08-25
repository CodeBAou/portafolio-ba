"use client"
import Image from 'next/image'
import styles from './page.module.css';
import Header from '../components/header/Header';
import Contacto from '../components/contacto/Contacto';
import TitleSection from '../components/titleSection/TitleSection';
import LayoutSection from '@/components/layoutSection/layoutSection';
import TitleLeftSection from '../components/titleLeft/titleLeft';
import LayoutList from '../components/LayoutList/LayoutList';

export default function Home() {
  return (
    <>
      <Header title="Boris Alvarez" rw="Frontend" lw1="Desarrollador Web" lw2="Diseño" image="/BorisPerfil.webp"/>

      <main>
      
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
                <p className={styles.normal}> F<span className={styles.textblue}>P</span> Sistemas Microinformáticos y Redes</p>
              </LayoutList>
          </LayoutSection>


          <LayoutSection>
              <TitleLeftSection title="Otra Formacion"/>
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

                <p className={styles.normal}> Desarrollo en javascript , angular, node y mongodb <span className={styles.textblue}>udemy</span></p>
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

      </main>
    </>
  )
}
