import React from 'react'
import {IoLogoWhatsapp} from 'react-icons/io'
import { auth, provider } from '../../firebase'
// import { signInWithPopup} from 'firebase/auth'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  
  const signIn = async()=>{
    const result = await signInWithPopup(auth,provider).catch(alert)
  }

 
  


  return (
    <div className='h-[100vh] grid place-content-center drop-shadow-md'>
      <div className=' flex flex-col w-[55vh] h-[40vh] items-center border-2  rounded-lg space-y-4 '>
        <IoLogoWhatsapp className='text-9xl mt-4 text-cyan-800'/>
        <button onClick={signIn} className='border-2 mt-5 rounded-md w-64 h-10 '> Sign In With Google</button>
        <button className='border-2 rounded-md w-64 h-10 '> Sign In With MobileNumber</button>
      </div>
    </div>
  )
}

export default Login
