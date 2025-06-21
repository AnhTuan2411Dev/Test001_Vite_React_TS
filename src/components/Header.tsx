import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  logoComponent: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ logoComponent }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginClick = () => {
    navigate('/auth', { state: { isLoginActive: true } });
    setIsMenuOpen(false); // Close menu on navigation
  };

  const handleRegisterClick = () => {
    navigate('/auth', { state: { isLoginActive: false } });
    setIsMenuOpen(false); // Close menu on navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center fixed top-0 w-full z-10">
      <Link to="/" className="flex items-center">
        {logoComponent}
      </Link>

      {/* Hamburger menu icon for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-blue-600">Thêm khóa học</a>
        <button onClick={handleLoginClick} className="text-gray-600 hover:text-blue-600">Đăng nhập</button>
        <button onClick={handleRegisterClick} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Tạo tài khoản</button>
      </nav>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4">
          <a href="#" className="text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Thêm khóa học</a>
          <button onClick={handleLoginClick} className="text-gray-600 hover:text-blue-600">Đăng nhập</button>
          <button onClick={handleRegisterClick} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Tạo tài khoản</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
