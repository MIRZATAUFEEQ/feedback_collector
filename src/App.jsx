import React from 'react'
import { useState } from 'react'
import ToggleButton from './components/ToggleButton'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'

const App = () => {
  const [showFeedbacks, setShowFeedbacks] = useState(false)
  return (
    <>
      <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300'>
        <div className='max-w-2xl mx-auto p-6'>
          <h1 className='text-2xl font-bold mb-4 text-center'>Feedback Collector</h1>
          <ToggleButton onClick={() => setShowFeedbacks(!showFeedbacks)} show={showFeedbacks} />
          {showFeedbacks ? <FeedbackList /> : <FeedbackForm />}
          <footer className='mt-8 text-center text-sm text-gray-500'>
            Created by Taufeeq Mirza • Submitted on
          </footer>
        </div>

      </div>
    </>
  )
}

export default App