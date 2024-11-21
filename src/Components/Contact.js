import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';
import { motion} from 'framer-motion'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.user_name.value || !form.current.user_email.value || !form.current.message.value) {
      alert('All fields are required!');
      return;
    }

    emailjs
      .sendForm('service_poih54a', 'template_xxx123', form.current, 'your-public-key')
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
          console.error('EmailJS error:', error.text);
        }
      );
  };

  return (
    <motion.div className="mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 p-10 sm:px-6 lg:px-8"
    initial={{x: -100}}
    animate={{x: 0}}>
      {/* Left Section */}
      <div className="space-y-7 md:w-1/2">
        <h1 className="font-bold text-4xl">Contact Info</h1>
        <p className="text-gray-400">
          Let's connect! Send me a message, and I will answer as soon as possible.
        </p>

        <div className="text-md flex text-gray-500 space-x-3 items-center">
          <BsFillTelephoneInboundFill />
          <p>+252613406852</p>
        </div>

        <div className="text-md flex text-gray-500 space-x-3 items-center">
          <FiMail />
          <p>muriidithuram@gmail.com</p>
        </div>

        <div className="text-md flex text-gray-500 space-x-3 items-center">
          <MdLocationPin />
          <p>Mogadishu, Somalia</p>
        </div>
      </div>

      {/* Right Section */}
      <form ref={form} className="flex flex-col w-full md:w-1/2 space-y-6" onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="rounded-sm p-3 border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="rounded-sm p-3 border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />

        <textarea
          name="message"
          placeholder="Message"
          className="rounded-sm p-3 border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-28 resize-none"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white font-medium py-2 px-4 rounded-sm hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
