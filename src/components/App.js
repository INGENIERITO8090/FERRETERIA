
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap' 
import  Nav_bar from'./components/nav_bar'

function App() {
  return (
  <div className="App">
  <Nav_bar
  title={"Ferre S.A.S"}
  link1={"HOME1"}
  link2={"HOME2"}
  link3={"HOME3"}
  /> 
  </div>
  );
}

export default App;
