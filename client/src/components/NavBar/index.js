import {useContext} from 'react'

import SignOut from './SignOut'

import {UserContext} from '../../context/User'

function NavBar() {

  const user = useContext(UserContext)

  return(
    <nav className='sticky top-2 bg-white p-4 border flex justify-between'>
      <span className='p-2 border text-lg'>Fleet Management</span>
      {user.details? <span className='p-2 text-bold'>Welcome, {user.details.full_name}</span> : ''}
      <SignOut />
    </nav>
  )
}

export default NavBar
