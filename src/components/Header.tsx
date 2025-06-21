import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  logoComponent: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ logoComponent }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/auth', { state: { isLoginActive: true } });
  };

  const handleRegisterClick = () => {
    navigate('/auth', { state: { isLoginActive: false } });
  };

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center fixed top-0 w-full z-10">
      <Link to="/" className="flex items-center">
        {logoComponent}
      </Link>
      <nav className="flex items-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-blue-600">Thêm khóa học</a>
        <button onClick={handleLoginClick} className="text-gray-600 hover:text-blue-600">Đăng nhập</button>
        <button onClick={handleRegisterClick} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Tạo tài khoản</button>
      </nav>
    </header>
  );
};

export default Header;
