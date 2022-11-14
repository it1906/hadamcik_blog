import { useSession, signIn, signOut } from "next-auth/react"
import { userAgent } from "next/server"
import {AiOutlineUser} from 'react-icons/ai'
import Image from 'next/image'

export default function Component() {
  
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <div className="flex translate-y-3 cursor-pointer" onClick={() => signOut()}>
          <span className="mr-1">Sign out</span>
          <Image className='rounded-full md:float-right -translate-y-1' title={session.user.email} unoptimized height='30' width='30' alt={session.user.email} src ={session.user.image}/>
        </div>
      </>
    )
  }
  return (
    <>
    <div className="flex translate-y-3 cursor-pointer" onClick={() => signIn()}>
        <span className="mr-1">Sign in</span>
        <AiOutlineUser className="md:float-right bg-black text-white text-xl p-1 rounded-full transition duration-300 ease-in-out bg-gradient-to-r hover:from-orange-600 hover:to-orange-400 cursor-pointer"/>
    </div>
    </>
  )
  
}