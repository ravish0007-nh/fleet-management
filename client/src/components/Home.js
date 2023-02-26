import {useContext, useEffect} from 'react'
import  {UserContext} from '../context/User'
import {useNavigate, Link} from "react-router-dom";

import NavBar from './NavBar'
import Machines from './Machines'

function Home() {

  const user = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if(!user.isAuthenticated) {
      navigate("/login")
    }
  }, [user])

  return (
    <div className='mt-2'>
      <NavBar />
      <Machines />
    </div>
  )
}

export default Home
