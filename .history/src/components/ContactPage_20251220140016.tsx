/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 xl:px-0 ">
      <div className="w-full sm:w-3/4 md:w-2/3 xl:w-auto rounded-xl">
        <h1 className="text-2xl sm:text-3xl text-center font-medium xl:mt-10 xl:mb-10 sm:mb-12 md:mb-14">
          Enter Your Personal Information
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 md:space-y-8 xl:space-y-8">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
              className="w-full xl:w-175 px-4 py-3 border border-[#d0e3ec] rounded-[5px] bg-[#d0e3ec] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              required
              className="w-full px-4 py-3 border border-[#d0e3ec] rounded-[5px] bg-[#d0e3ec] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone *"
              required
              className="w-full px-4 py-3 border border-[#d0e3ec] rounded-[5px] bg-[#d0e3ec] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full xl:h-51 px-4 py-3 border border-[#d0e3ec] rounded-[5px] bg-[#d0e3ec] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
