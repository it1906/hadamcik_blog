import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { LoginButton, Dropdown } from '.';
import { getCategories } from '../services'
import {HiHome} from 'react-icons/hi'
import {AiOutlineDown} from 'react-icons/ai'





const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <div className='container mx-auto px-10 mb-8 '>
            <div className='w-full inline-block py-8 '>
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
                            <li className='mr-2 -translate-y-1'>
                                <Link href='/'>
                                    <span className='inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 flex'><HiHome className='mr-1 w-5 h-4'/>Home</span>
                                </Link>
                            </li>
                            
                            {categories.map((category) => (
                                <li className='mr-2 -translate-y-1'>
                                    <Link key={category.slug} href={`/category/${category.slug}`}>
                                        <span className='inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 flex'>
                                            {category.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
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