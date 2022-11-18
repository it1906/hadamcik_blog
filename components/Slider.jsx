import {motion} from 'framer-motion'
import moment from 'moment';
import React, { useRef, useEffect, useState} from 'react'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services';


const Slider = ({categories, slug}) => {
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
    <div>
      <div>
        <div className='flex grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 border-b pb-8 border-black'>
        {relatedPosts.map((post)=>(
            <div className='lg:col-span-4 lg:inline-block hidden'>
              <Link href={`/post/${post.slug}`}>
              <div class="relative h-full hover:-translate-y-1 cursor-pointer">
                <img className='h-full rounded-lg' src={post.featuredImage.url}/>
                <div class="absolute bottom-0 rounded-b-lg text-lg bg-gradient-to-t from-black opacity-75 w-full h-full hover:from-orange-500 hover:backdrop-grayscale hover:opacity-100 duration-300 ease-in-out transition">
                  <div className='ralative pl-5'>
                    <div className='absolute bottom-2 right-2 text-white'>
                      <span className='w-full'>
                        <p className=''>
                          {post.title}  
                        </p>
                        <p className='float-right italic text-sm'>
                          {moment(post.createdAt).format('DD. MM. YYYY')}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default Slider
