
import React, { useState } from 'react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We’ll get back to you shortly.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-3xl p-8">
        {/* Left - Office Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-700">Get in Touch!</h2>
          <p className="text-gray-700">
            For any queries, concerns, or feedback, get in touch. Our team will get back with solutions as soon as possible.
          </p>
          <div className="text-gray-800 space-y-3">
            <div>
              <h4 className="text-xl font-semibold">OFFICE</h4>
              <p>SM Trade Co.<br />K-139, Waluj, MIDC<br />Aurangabad-431136<br />Maharashtra, India.</p>
            </div>
            <div>
              <p className="mt-4">📞 <strong>+91-9225577999</strong></p>
              <p>✉ <a href="mailto:sagargases@gmail.com" className="text-blue-600 hover:underline">sagargases@gmail.com</a></p>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
