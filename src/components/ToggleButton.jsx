import React from 'react'

const ToggleButton = ({ onClick, show }) => {

    return (
        <>
            <button onClick={onClick} className='mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition'>
                {show ? 'Back to Form' : 'View Submitted Feedback'}
            </button>
        </>
    )
}

export default ToggleButton