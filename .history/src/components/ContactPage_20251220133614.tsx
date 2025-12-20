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
    <div className="xl:w-213.25 xl:h-170 mx-auto bg-[#f3f7fd] border mt-13.75 flex items-center justify-center ">
      <div className=" rounded-xl border ">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center ">
          Enter Your Personal Information
        </h1>

        
      </div>
    </div>
  );
};

export default ContactPage;
