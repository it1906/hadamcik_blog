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
                <div className="px-4 pb-12 mb-8">
                    <h3 className="text-xl mb-3 font-bold pb-4">
                        {comments.length}
                        {' '}
                        Comment(s)
                    </h3>
                    {comments.map((comment, index) => (
                        <div key={index} className="mb-4 pb-4">
                            <p className="mb-4">
                                <span className="font-semibold">{comment.name}</span>
                                {' '}
                                {' '}
                                {moment(comment.createdAt).format('DD. MM. YYYY')}
                            </p>
                            <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.comment)}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Comments