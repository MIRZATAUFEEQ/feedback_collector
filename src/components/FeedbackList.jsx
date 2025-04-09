import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([])

    useEffect(() => {
        fetch('/.netlify/functions/getFeedbacks')
            .then((res) => res.json())
            .then(setFeedbacks)
    }, [])

    return (
        <>
            <div className='space-y-4 mt-4'>
                {
                    feedbacks.map((fb) => (
                        <div key={fb.id} className="p-4 border rounded shadow bg-white dark:bg-gray-800">
                            <p className="font-semibold">{fb.fullName}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{fb.email}</p>
                            <p className="mt-2">{fb.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{new Date(fb.timestamp).toLocaleString()}</p>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default FeedbackList