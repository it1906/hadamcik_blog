import Link from 'next/link'
import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CiFacebook} from 'react-icons/ci'

const Footer = () => {
  return (
    <div className='p-4 bg-gray-900 rounded-t-md shadow md:flex md:items-center md:justify-between md:p-6'>
        <div className='text-white'>
          Contacts: hanishadamcik@seznam.cz
        </div>
        <div className='justify-end text-white text-2xl'>
          <div className='mb-2'>
            <Link href='https://www.instagram.com/jan_hadamcik/'>
              <AiOutlineInstagram/>
            </Link>
          </div>
          <div>
            <Link href='https://www.facebook.com/jhadamcik/'>
              <CiFacebook/>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Footer