
import './App.css'
import Carrusel from './components/carrusel'
import Nav_bar from './components/nav_bar'

function App() {
  return <div className="App">
 
 <header>  
  <Nav_bar title={"FERRE S.A.S"}
          name1={"Inicio"}
          name2={"Contacto"}
          name3={"N/a"}
          ></Nav_bar>  
</header>

 <Carrusel></Carrusel>


  </div>  
  




}

export default App
