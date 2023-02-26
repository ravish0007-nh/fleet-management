import {useContext} from 'react'
import {UserContext} from '../../context/User'
import {useNavigate} from 'react-router-dom'

function SignOut() {

  const user = useContext(UserContext)
  const navigate = useNavigate()

  const handleClick = () => {
    user.logout()
  }

  return(
    <button 
      className='p-2 border rounded-sm text-white bg-black'
      onClick={handleClick}
    >
      SignOut
    </button>
  )
}

export default SignOut
