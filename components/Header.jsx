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


    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <div className='mb-8 px-5 bg-gray-100 shadow-sm'>
            <div className='inline-block pt-5 w-full'>
                <div className='md:float-left block'>
                    <Link href="/">
                        <span className='cursor-pointer text-2xl'>
                            JH | blog
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    <div className='text-md font-medium text-center flex justify-end'>
                        <ul className='flex flex-wrap -mb-px relative'>
                            <li className='-translate-y-1'>
                                <Link href='/'>
                                    <span className='inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 flex '><HiHome className='w-5 h-4'/>Home</span>
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