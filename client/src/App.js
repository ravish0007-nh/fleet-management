import {
Routes, Route
} from 'react-router-dom'

import './index.css';

import Home  from './components/Home'
import ViewData  from './components/ViewData'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Machines from './components/Machines'
import Orders from './components/Orders'

import UserProvider from './context/User'
 
function App() {

  return (
    <UserProvider>
      <Routes>
          <Route path='/' element={<Home />} >
                <Route index path='machines' element={<Machines />} />
                <Route path='view' element={<ViewData />} />
                <Route path='orders' element={<Orders />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
