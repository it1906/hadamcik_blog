import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);

  return (
    <div className=''>
      <h3 className='text-xl mb-5 font-semibold border-n pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='pl-2 cursor-pointer block pb-5 hover:underline hover:underline-offset-4 decoration-orange-500 hover:font-bold'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories