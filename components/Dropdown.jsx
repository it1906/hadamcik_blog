import { AiOutlineDown } from 'react-icons/ai'
import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from 'next/link'


const Dropdown = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);
    const [showOptions, setShowOptions] = useState(false);
    const handleClick = () => {
        setShowOptions(!showOptions);
    }

    return (
                <div className='dropdown relative'>
                    <button ocClick={handleClick} type="button" data-bs-toggle="dropdown" aria-expanded="false" class='dropdown-toggle flex justify-between items-center inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300'>
                        Articles
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="ml-2 w-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                        </svg>
                    </button>
                    <div role = 'menu' className='w-full shadow-sm bg-white rounded-lg 'data-popper-placement="bottom" aria-orientation='vertical'>
                                            <ul>
                                                {categories.map((category) => (
                                                    <li className='-translate-y-1 hover:bg-gray-100'>
                                                        <Link key={category.slug} href={`/category/${category.slug}`}>
                                                            <span className='block py-2 px-4'>
                                                                {category.name}
                                                            </span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
            </div>
    )
}
export default Dropdown;