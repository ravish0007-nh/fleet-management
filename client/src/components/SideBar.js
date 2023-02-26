import {Link} from 'react-router-dom'
function SideBar() {

  return(
    <aside className='border rounded p-4 h-fit m-4 space-y-3'>

        <Link 
          className='block border rounded p-2 hover:bg-black hover:text-white' 
          to='/machines'
        >
          Vending Machines
        </Link>

        <Link 
          className='block border rounded p-2 hover:bg-black hover:text-white' 
          to='/orders'
        >
            My Orders
        </Link>


        <Link 
          className='block border rounded p-2 hover:bg-black hover:text-white' 
          to='/view'
        >
          View
        </Link>
    </aside>
  )
}


export default SideBar
