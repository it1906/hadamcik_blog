import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { LoginButton } from '.';
import { getCategories } from '../services'





const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <div className='container mx-auto px-10 mb-8 '>
            <div className='w-full inline-block py-8'>
                <div className='md:float-left block'>
                    <Link href="/">
                        <span className='cursor-pointer text-2xl bg-black rounded-lg text-white p-2 '>
                            JH | blog
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    <div>
                         <LoginButton/>
                    </div>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-black ml-3 font-semibold cursor-pointer p-2 transition duration-300 ease-in-out
                            bg-gradient-to-r hover:text-white hover:from-orange-600 hover:to-orange-400 transform hover:-translate-y-2 rounded-lg'>
                                {category.name}
                            </span>
                        </Link>
                    ))}
                    <Link href="/">
                        <div className='md:float-right mt-2 align-middle text-black ml-3 font-semibold cursor-pointer p-2 transition duration-300 ease-in-out
                                bg-gradient-to-r hover:text-white hover:from-orange-600 hover:to-orange-400 transform hover:-translate-y-2 rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 inline mr-1 -translate-y-1' viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
                            </svg>
                            <span>Home</span>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header