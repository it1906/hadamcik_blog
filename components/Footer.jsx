import Link from 'next/link'
import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CiFacebook} from 'react-icons/ci'

const Footer = () => {
  return (
    <div className=''>
      <div className='bg-gray-100 md:flex md:items-center md:justify-between md:p-2'>
        <div>
          Contacts: hanishadamcik@seznam.cz
        </div>
        <div className='justify-end text-2xl flex'>
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
    </div>

  )
}

export default Footer