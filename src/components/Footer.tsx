import React from 'react';
import { assets } from '../assets/assets.js';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src={assets.logo_dark} alt="Edemy Logo" className="h-8 mb-4" />
          <p className="text-sm leading-relaxed">
            Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ. Lorem Ipsum đã là
            văn bản giả tiêu chuẩn của ngành.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Công ty</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Trang chủ</a></li>
            <li><a href="#" className="hover:text-white">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-white">Liên hệ</a></li>
            <li><a href="#" className="hover:text-white">Chính sách bảo mật</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Đăng ký nhận bản tin của chúng tôi</h3>
          <p className="text-sm mb-4">
            Tin tức, bài viết và tài nguyên mới nhất, được gửi đến hộp thư đến của bạn hàng tuần.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="w-full p-3 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-700 text-center text-sm">
        <p>Bản quyền 2024 © Edemy. Đã đăng ký bản quyền.</p>
      </div>
    </footer>
  );
};

export default Footer;
