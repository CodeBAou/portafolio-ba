import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/header/Header';
import Contacto from '../components/contacto/Contacto';
import TitleSection from '../components/titleSection/TitleSection';

export default function Home() {
  return (
    <>
      <Header title="Boris Alvarez" rw="Frontend" lw1="Desarrollador Web" lw2="Diseño" image="/BorisPerfil.webp"/>
      <main>
      
          <Contacto github="https://github.com/CodeBAou" linkedin="https://www.linkedin.com/in/borisou" email="borisafou@gmail.com"/>
          <TitleSection title="formacion"/>
      
      </main>
    </>
  )
}
