import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      <div>
        {/*Signed in as {session.user.email}*/}
        <div className='md:float-right mt-2 align-middle text-white ml-3 font-semibold cursor-pointer p-2 transition duration-300 ease-in-out
                            bg-black bg-gradient-to-r hover:from-orange-600 hover:to-orange-400 transform hover:-translate-y-2 rounded-lg'>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>

      </>
    )
  }
  return (
    <>
    <div>      
      <div  className='md:float-right mt-2 align-middle text-white ml-3 font-semibold cursor-pointer p-2 transition duration-300 ease-in-out
                            bg-black bg-gradient-to-r hover:from-orange-600 hover:to-orange-400 transform hover:-translate-y-2 rounded-lg'>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    </div>

    </>
  )
}