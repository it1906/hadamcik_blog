import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from 'next/link'
import {BsFillCaretDownFill} from 'react-icons/bs'



const Dropdown = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
  }

    return (
        <>
        <div>
            <span onClick={toggle} className='inline-block p-4 rounded-t-lg hover:text-gray-600 flex -translate-y-1 cursor-default '>
                Articles <BsFillCaretDownFill className='ml-1 translate-y-1'/>
            </span>
            <div style={{display: showMe?"block":"none"}}>
            <ul className='shadow-md bg-white rounded-lg fixed z-10'>
                {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <li className='hover:border-l-2 border-orange-500 hover:text-gray-500 mx-6 my-2'>
                        {category.name}
                    </li>
                </Link>
                ))} 
            </ul>    
            </div>
        </div>
        
        </>
        
                
    )
}
export default Dropdown;