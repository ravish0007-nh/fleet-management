import {useState} from 'react'
import {Link} from 'react-router-dom'

function SignUp() {

  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

  }

 return (
    <div className='mx-auto p-4 border border-black w-1/2 mt-12'>

        <form 
        onSubmit={handleSubmit}
        className='space-y-3'
         >
          <div className='space-x-3'>
            <label htmlFor='fullname'> Full Name: </label>
            <input
              type='text'
              id='fullname'
              className='border border-black rounded p-1'
              autoComplete='off'
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>


          <div className='space-x-3'>
            <label htmlFor='email' >
              Email:
            </label>

            <input
              type='email'
              id='email'
              className='border border-black rounded p-1'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='space-x-3'>
            <label
              htmlFor='password'
            >
              Password:
            </label>

            <input
              type='password'
              id='password'
              className='border border-black rounded p-1'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='space-x-5'>
            <button
              type='submit'
              className='text-white bg-black p-2 rounded'
            >
              Sign Up
            </button>

            <Link to='/login'><span className='text-gray-500 hover:text-black'>Login Instead</span></Link>
          </div>
        </form>

    </div>
  )
}

export  default SignUp
