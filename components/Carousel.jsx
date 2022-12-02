import moment from 'moment';
import React, { useRef, useEffect, useState} from 'react'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services';
import Slider from "react-slick";
import{BsArrowRight} from 'react-icons/bs'

const Carousel = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

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
      
        <div className='mb-12'>
        <h2 className='font-bold text-xl'>Our newest</h2>
        <Slider {...settings}>
        {relatedPosts.map((post)=>(
          <div className='w-full md:h-[500px] border border-gray-200'>
            <div className='grid md:grid-cols-12'>
              <div className='md:col-span-8'>
                <div>
                  <img className='object-cover object-right md:object-center md:h-[500px] w-full rounded-t-lg md:rounded-none' src={post.featuredImage.url} alt={post.title}/>
                </div>
              </div>
              <div className='md:col-span-4 bg-gray-100 rounded-b-lg mb-2 md:rounded-none pl-2 h-full'>
                  <span className='pt-3 md:mb-5 inline-block md:text-xl font-bold h-1/4 md:h-auto md:w-full'>
                    <Link href={`/post/${post.slug}`}>
                      <p className='hover:underline hover:underline-offset-2 cursor-pointer'>
                        {post.title}
                      </p>
                    </Link>
                    <p className='text-sm font-normal text-gray-500 md:float-right md:pr-3'>
                      {moment(post.createdAt).format('DD MMM YYYY')}
                    </p>
                  </span>
                  <p className='md:pl-2 inline-block text-sm md:text-md text-gray-700 h-1/2 md:h-auto'>
                    {post.exerpt}
                  </p>
                  <div className='relative'>
                    <Link href={`/post/${post.slug}`}>
                      <div className=' invisible md:visible px-5 py-2 text-2xl absolute bg-black transition duration-500 bg-gradient-to-r hover:from-orange-600 hover:to-orange-400 cursor-pointer text-white rounded-lg right-3 top-7'>
                        <BsArrowRight/>
                      </div>
                    </Link>
                    <Link href={`/post/${post.slug}`}>
                      <div className='visible md:invisible text-center mb-3 underline underline-offset-4 font-bold'>
                        <span>
                          Read more
                        </span>
                      </div>
                    </Link>

                  </div>
              </div>
            </div>      
          </div>
          ))}
        </Slider>

      </div>
    );
}

export default Carousel