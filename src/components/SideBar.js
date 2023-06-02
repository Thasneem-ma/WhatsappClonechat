import {RxAvatar} from 'react-icons/rx';
import {BsChatLeftTextFill} from 'react-icons/bs';
import {FiMoreVertical} from 'react-icons/fi';
import {BiSearch} from 'react-icons/bi';
import * as EmailValidator from 'email-validator';
import { auth } from '../../firebase';
import { useAuthState} from 'react-firebase-hooks/auth'
import {useEffect} from 'react'
import Image from 'next/image';
// import {useSession} from ''


export default function SideBar() {
  const [user, setUser]= useAuthState(auth)
  const createChat = () => {
   const input = prompt(
    'Please enter an email address for the user you want to chat.'
   )
    if (!input) return null;

    if (EmailValidator.validate(input)){
      // we need to add the chat to the db chats list
    }

  }
  
  useEffect(() => {
    console.log(user)
  }, [user])

  



  return (
    <div className='bg-blue-950 container' >
      <header className='flex items-center bg-myChat-dark sticky top-0 z-10 justify-between p-4 h-20 shadow-sm shadow-slate-400'>
        {user ? <Image width={50} height={50} className='rounded-full' src={user.photoURL}></Image>  : <RxAvatar className=' text-3xl text-white bg-gray-400 rounded-full w-10 h-10 p-0.5 cursor-pointer hover:bg-gray-500 '></RxAvatar> }
        
        <h1 className='text-white text-sm italic'>{user ? "welcome" + user.displayName : "Please log in"}</h1>
        <div className='flex text-2xl text-white items-center'>
        <BsChatLeftTextFill className='cursor-pointer '/>
        <FiMoreVertical className='cursor-pointer '/>
        </div>
      </header>


      {/* searchBar */}
      <div className='flex text-white items-center p-5 rounded-sm'>
        <BiSearch className='text-2xl '/>
        <input type="text" className='bg-transparent outline-0 border-none flex-1 ' placeholder='Search in chats' />
      </div>
      
      
      {/* side bar button */}
      <button onClick={createChat} className='w-full bg-white text-xl text-center text-myChat-dark font-medium uppercase py-3 hover:bg-slate-200'>Start a new chat</button>
      

      {/* list of chats */}
      {/* <a href="https://www.google.com" target={'_blank'} >goooogle</a> */}
    </div>
  )
}

