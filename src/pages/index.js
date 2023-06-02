import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar'



export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Whatsapp</title>
      </Head>

      <main className='grid grid-flow-col grid-cols-4'>
      <SideBar/>
      <div>hello</div>
      </main>
    </div>
    )
}
