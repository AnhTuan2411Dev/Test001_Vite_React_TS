import React from 'react';
import { assets } from '../assets/assets.js';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src={assets.logo_dark} alt="Edemy Logo" className="h-8 mb-4" />
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Subscribe to our newsletter</h3>
          <p className="text-sm mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-700 text-center text-sm">
        <p>Copyright 2024 © Edemy. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
