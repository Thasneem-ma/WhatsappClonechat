import '@/styles/globals.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth , db } from '../../firebase'
import Login from './Login'
import Loading from './Loading'
// import type { AppProps } from 'next/app'

export default function App({ Component, ...pageProps }) {
  const [user, loading] = useAuthState(auth);

  if (!user) return <Login/>
  if (loading) return <Loading/>

  return <Component {...pageProps} />
}
