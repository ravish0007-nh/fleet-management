import {useContext, useEffect} from 'react'
import  {UserContext} from '../context/User'
import {useNavigate, Outlet} from "react-router-dom";

import NavBar from './NavBar'
import SideBar from './SideBar'
import Machines from './Machines'
import ViewData from './ViewData'

function Home() {

  const user = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if(!user.isAuthenticated) {
      navigate("/login")
    }
  }, [user])

  return (
    <div className='mt-2 mb-10'>
      <NavBar />
      <div className='flex flex-row'>
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Home
