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
    <div className='bg-white rounded-sm px-2 py-2 mb-12 lg:mb-8 lg:border-b lg:border-r rounded border-gray-100'>
        <span className='font-bold text-xl'>Consider reading</span>
        {relatedPosts.map((post) => (
          <div key={post.title} className='md:h-64 grid md:grid-cols-12 md:gap-12 mb-4'>
            <div className='col-span-6 h-full'>
              <img className='rounded-md object-cover h-64 w-full' src={post.featuredImage.url} />
            </div>
            <div className='col-span-6 text-center md:text-left h-64 w-full'>
                <p className='text-gray-700 text-lg font-bold capitalize '>
                  {post.title}
                </p>
                <p className='text-gray-500 inline-block'>
                  {post.exerpt}
                </p>
              <Link href={`/post/${post.slug}`}>
                  <div className='invisible md:visible px-5 py-2 float-right text-2xl bg-black transition duration-500 bg-gradient-to-r hover:from-orange-600 hover:to-orange-400 cursor-pointer text-white rounded-lg'>
                    <BsArrowRight/>
                  </div>
              </Link>
            </div>
          </div>
         ))}
    </div>
  )
}

export default PostWidget