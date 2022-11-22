import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import{BsArrowRight} from 'react-icons/bs'
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className='bg-white rounded-sm px-4 py-3 mb-8 border-b border-r rounded border-gray-100'>
      <div className=''>
        <span className='font-bold text-xl '>Consider reading</span>
        {relatedPosts.map((post) => (
          <div key={post.title} className='flex grid grid-cols-12 gap-12 mt-3'>
            <div className='col-span-6 '>
              <img className='rounded-md' src={post.featuredImage.url} />
            </div>
            <div className='col-span-6'>
              <span>
                <p className='text-gray-700 text-lg font-bold capitalize '>
                  {post.title}
                </p>
                <p className='text-gray-500'>
                  {post.exerpt}
                </p>
              </span>
              <Link href={`/post/${post.slug}`}>
                <div className='relative h-full '>
                  <div className=' px-5 py-2 text-2xl absolute bg-black transition duration-500 bg-gradient-to-r hover:from-orange-600 hover:to-orange-400 cursor-pointer text-white rounded-lg right-3 top-7'>
                    <BsArrowRight/>
                  </div>
                </div>
              </Link>
            </div>
          </div>
         ))}
      </div>
    </div>
  )
}

export default PostWidget