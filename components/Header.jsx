import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { getCategories } from '../services'
import {HiHome} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'
import Dropdown from './Dropdown'
import { useSession, signIn, signOut } from "next-auth/react"
import { LoginButton } from '.'




const Header = () => {
    const [categories, setCategories] = useState([]);
    const { data: session } = useSession()


    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
  }

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='w-full inline-block pt-8 border-b border-black'>
                <div className='md:float-left block'>
                    <Link href="/">
                        <span className='cursor-pointer text-2xl bg-black rounded-lg text-white p-2 '>
                            JH | blog
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    <div className='text-md font-medium text-center flex justify-end'>
                        <ul className='flex flex-wrap -mb-px'>
                            <li className='-translate-y-1'>
                                <Link href='/'>
                                    <span className='inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 flex'><HiHome className='mr-1 w-5 h-4'/>Home</span>
                                </Link>
                            </li>
                            <Dropdown/>
                            <li>
                                <LoginButton/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header