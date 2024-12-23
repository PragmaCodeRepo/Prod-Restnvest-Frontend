import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 w-3/4">
      <h1 className="text-4xl font-bold text-center text-[#2C6E91] mb-6 tracking-wide mt-20">
        Contact Us
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Have questions or need assistance? We’re here to help. Fill out the form below, and we’ll get back to you as soon as possible.
      </p>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2C6E91] focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2C6E91] focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Subject Input */}
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-600">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2C6E91] focus:border-transparent"
              placeholder="Enter the subject"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2C6E91] focus:border-transparent"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#3892BB] text-white font-semibold rounded-lg shadow-md hover:bg-[#225b73] transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
