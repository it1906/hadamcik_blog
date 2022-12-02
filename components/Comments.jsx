import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'
import { FaUserAlt } from "react-icons/fa";

const Comments = ({ slug }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug).then((result) => {
            setComments(result);
        });
    }, []);

    return (
        <>
            {comments.length > 0 && (
                <div className="px-4 pb-12 mb-8 shadow-sm rounded-md">
                    <h3 className="text-xl mb-3 font-bold pb-4">
                        {comments.length}
                        {' '}
                        Comment(s)
                    </h3>
                    {comments.map((comment, index) => (
                        <div key={index} className="mb-4 p-2">
                            <p className="mb-2">
                                <span className="font-semibold mr-1">{comment.name}</span>
                                {' '}
                                <span className='text-sm text-gray-500'>
                                    {moment(comment.createdAt).format('DD. MM. YYYY')}
                                    {' at '}
                                    {moment(comment.createdAt).format('hh:mm A')}
                                </span>
                                
                            </p>
                            <p className="mb-2 whitespace-pre-line text-gray-700 w-full pl-2">{parse(comment.comment)}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Comments