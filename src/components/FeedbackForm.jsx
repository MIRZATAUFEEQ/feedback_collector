import React from 'react'
import { useState } from 'react'

const FeedbackForm = () => {
    const [form, setForm] = useState({ fullName: '', email: '', message: '' })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        setSuccess('')
        const response = await fetch('/.netlify/functions/submitFeedback', {
            method: 'POST',
            body: JSON.stringify(form)
        })
        if (response.ok) {
            setSuccess('Thank you for your feedback!');
            setForm({ fullName: '', email: '', message: '' })
        }
        setLoading(false)
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit} className='space-y-4'>
                <input
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded border"
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded border"
                />
                <textarea
                    name="message"
                    placeholder="Your Feedback"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded border"
                />
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded' disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
                {success && <p className='text-green-500'>{success}</p>}
            </form>
        </>
    )
}

export default FeedbackForm