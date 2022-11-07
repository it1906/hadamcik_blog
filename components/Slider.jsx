import {motion} from 'framer-motion'
import React, { useRef, useEffect, useState} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'


const Slider = () => {
  const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);



  return (
    <div>
      <motion.div>
        <motion.div>
        {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                          <motion.div>
                            <div>
                              <span>
                                {category.name}
                              </span>
                              <img src={category.image} alt="" />
                            </div>
                          </motion.div>

                        </Link>
                    ))}
        </motion.div>
      </motion.div>
    </div>

  );
}

export default Slider
