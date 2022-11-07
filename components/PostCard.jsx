import React from 'react'
import moment from 'moment';
import Link from 'next/link';


const PostCard = ({post}) => {

  return (
    <div className='bg-white shadow-sm rounded-lg p-0 pb-4 mb-8 hover:shadow-lg'>
          <div className='relative overflow-hidden pb-80 mb-6 grid justify-items-center'>
            <img src={post.featuredImage.url} alt={post.title} className='object-top absolute h-80 w-full object-cover rounded-t-lg' />
          </div>
          <h1 className='transition duration-400 text-center mb-8 cursor-pointer mt-6 ml-6 hover:text-orange-500 text-3xl font-semibold capitalize '>
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
          <div className='block lg:flex text-center items-center justify-center mb-8 w-full col-sm-8'>
            
            <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 rounded-full pr-2'>
              <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
            </div>
            <div className='font-medium text-gray-700'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                {moment(post.createdAt).format('DD. MM. YYYY')}
              </span>
            </div>
          </div>
          <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>{post.exerpt}</p>
          <Link href={`/post/${post.slug}`}>
          <div className='text-center pb-4'>
            <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-black bg-gradient-to-r hover:from-orange-600 hover:to-orange-400 text-lg font-medium rounded-full text-white px-6 py-3 cursor-pointer'>Read more</span>
          </div>
          </Link>
    </div>
  )
}

export default PostCard