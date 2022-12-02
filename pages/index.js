import Head from 'next/head';
import { PostCard, Carousel,SidePosts, Categories } from '../components';
import {getPosts} from '../services';

export default function Home({posts}) {

  return (
<div className="container mx-auto px-10 mb-8">
    <Head>
      <title>JH | blog</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>

    <Carousel/>
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="slick/slick.min.js"></script>
    <script type="text/javascript"></script>

    <div className='grid grid-cols-1 lg:grid-cols-12 gap-16'>
      <div className='lg:col-span-8 col-span-1'>
          {posts.map((post)=> <PostCard post={post.node}  key={post.title}/>)}
      </div>
      <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <Categories/>
          </div>   
      </div>
    </div>
  </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];
  return {
    props: {posts}
  }
}
