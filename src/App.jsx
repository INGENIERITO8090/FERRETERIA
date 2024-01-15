
import { Fragment } from 'react'
import { BrowserRouter as Router ,  Route , Routes}  from 'react-router-dom'
import Index from './views/Index'
import Login from './components/login'



function App() {
  return (
<Fragment> 
<Router> 
 <Routes > 

  <Route path='/' exact element ={<Index/>}> </Route>
  <Route path='/login' exact element ={<Login></Login>} />
   
   
   
   </Routes>






   
   
   
   
   
   
   </Router>
</Fragment>
  )
  




}

export default App
