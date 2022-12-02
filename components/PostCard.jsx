import React, {useState} from 'react'
import moment from 'moment';
import Link from 'next/link';


const PostCard = ({post}) => {
  const [cat,setCat]=useState(post.categories)

  return (
    <Link href={`/post/${post.slug}`}>
      <div className='md:h-80 mb-12 border rounded-lg md:rounded-none md:border-none border-gray-100 cursor-pointer hover:bg-gray-100'>
        <div className='grid grid-cols-1 md:grid-cols-12 w-full h-full'>
          <div className='md:col-span-6'>
            <img className='h-full object-cover rounded-t-lg md:rounded-none' src={post.featuredImage.url}/>
          </div>
          <div className='col-span-1 md:col-span-6 p-2'>
            <p className='font-bold text-lg'>
              {post.title}
            </p>
            <p className='text-gray-700 mt-2 hidden md:inline-block'>
              {post.exerpt}
            </p>
          </div>
        </div>
      </div> 
    </Link>
  )
}

export default PostCard