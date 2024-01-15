import React from 'react'
import '../App.css'
import Nav_bar from '../components/nav_bar' 
import Carrusel from '../components/carrusel'
export default function Index() {
  return (
    <div>
<header>  
  <Nav_bar title={"FERRE S.A.S"}
          name1={"Inicio"}
          name2={"Contacto"}
          ruta={"Login"}
          ></Nav_bar>  
</header>
 

<Carrusel>  </Carrusel>

    </div>
  )
}
