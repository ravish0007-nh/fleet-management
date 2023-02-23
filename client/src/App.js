import {
Routes, Route
} from 'react-router-dom'

import './index.css';
import ViewData  from './components/ViewData'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {

  return (
    <Routes>
        <Route path='/view' element={<ViewData />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;
