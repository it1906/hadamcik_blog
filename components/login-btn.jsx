import { useSession, signIn, signOut } from "next-auth/react"
import React, { useState, useEffect, useRef } from 'react'
import { getCategories } from '../services'
import Image from 'next/image'
import { FaUserAlt } from "react-icons/fa";

export default function Component() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);

  const [showMe, setShowMe] = useState(false);

  function toggle() {
    setShowMe(!showMe);
  }

  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <div>
        <span onClick={toggle} className='p-2 inline-block bg-black text-white rounded-full text-md translate-y-1 cursor-pointer bg-gradient-to-r hover:from-orange-600 hover:to-orange-400'>
          <FaUserAlt />
        </span>
        <div style={{ display: showMe ? "block" : "none" }}>
          <ul className='bg-gray-900 text-gray-200 fixed z-10 p-5 rounded-lg'>
            <li className='flex justify-center p-4 rounded-full'>
              <img className="rounded-full object-scale-down h-20" src={session.user.image}/>
            </li>
            <li>
              <span>
                <p>{session.user.name}</p>
                <p className="text-sm underline underline-offset-8 decoration-gray-500">{session.user.email}</p>
              </span>
            </li>
            <li className='mt-5 cursor-pointer' onClick={() => signOut()}>
              Sign out
            </li>
          </ul>
        </div>
      </div>
      </>
    )
  }
  return (
    <>
      <div>
        <span onClick={toggle} className='p-2 inline-block bg-black text-white rounded-full text-md translate-y-1 cursor-pointer bg-gradient-to-r hover:from-orange-600 hover:to-orange-400'>
          <FaUserAlt />
        </span>
        <div style={{ display: showMe ? "block" : "none" }}>
          <ul className='bg-gray-900 text-gray-200 fixed z-10 p-5 rounded-lg'>
            <li className='flex justify-center p-4 rounded-full'>
              <FaUserAlt />
            </li>
            <li className='underline underline-offset-8 decoration-gray-500'>
              Guest
            </li>
            <li className='mt-5 cursor-pointer' onClick={() => signIn()}>
              Sign in
            </li>
          </ul>
        </div>
      </div>
    </>
  )

}