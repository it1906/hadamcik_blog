import React, { useState, useEffect, useRef } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEL = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEL.current.value = window.localStorage.getItem('email');
  }, [])

  const handleCommentSubmission = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEL.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug }

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000)
      })

  }

  return (
    <div className='pb-12 mb-8'>
        <div className='grid grid-cols-1 gap-4 mb-4 border rounded-md border-gray-100'>
          <textarea
            ref={commentEl}
            className='p-4 resize-none border-none outline-none w-full focus:ring-0 focus:shadow-sm focus:bg-gray-100 rounded-md text-gray-700 transition duration-500 ease-in-out '
            placeholder='Comment...'
            name='comment'
          />
        </div>
        <div className='grid grid-cols-2 gap-4 mb-4 text-gray-700 text-sm'>
            <input
            type='text'
            ref={nameEl}
            className='outline-none border-gray-100 rounded-md focus:ring-0 bg-white focus:bg-gray-100 focus:border-gray-100 focus:shadow-sm transition duration-500 ease-in-out'
            placeholder='Name'
            name='name'
            />
            <input
            type='text'
            ref={emailEL}
            className='outline-none border-gray-100 rounded-md focus:ring-0 bg-white focus:bg-gray-100 focus:border-gray-100 focus:shadow-sm transition duration-500 ease-in-out'
            placeholder='Email'
            name='email'
            />
        </div>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div className='col-span-1'>
            <input
              ref={storeDataEl} type='checkbox' id='storeData' name='storeData' value='true' className='focus:ring-0 rounded-full p-2' checked/>
            <label className='text-gray-500 cursor-pointer ml-2 ' htmlFor='storeData'> Save my e-mail and name for the next time I want to comment</label>
          </div>
          <div className='col-span-1'>
            <div className='float-right'>
              <button
                type='button'
                onClick={handleCommentSubmission}
                className='flex transition duration-500 transform inline-block bg-black bg-gradient-to-r hover:from-orange-600 hover:to-orange-400 text-lg font-medium rounded-lg text-white px-6 py-3 cursor-pointer'>
                Send <BsArrowRight className='ml-2 text-xl translate-y-1'/>
              </button>
            </div>
        </div>
        {error && <p className='text-xs text-red-500'>All fields are required.</p>}
        
          {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submited for review.</span>}
        </div>
    </div>
  )
}

export default CommentsForm