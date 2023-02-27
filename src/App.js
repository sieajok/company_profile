
import Login from './login/login';
import Register from './register/register';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from '../src/Home/home';
import Home2 from './home2/home';
import Contact from './kontak/Contact'


function App() {
  return (
   <Routes>

   <Route path='/' element={<Home />}/>
   <Route path='/contact' element={<Contact />}/>
   <Route path='/home2' element={<Home2/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    </Routes>
    
  );
}

export default App;
