import {useContext, useEffect} from 'react'
import  {UserContext} from '../context/User'
import {useNavigate} from "react-router-dom";

function Home() {

  const user = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if(!user.isAuthenticated) {
      navigate("/login")
    }
  }, [user])

  return (
    <h1> Hello world</h1>
  )
}

export default Home
